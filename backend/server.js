// ================================
// Importation des modules
// ================================
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const OpenAI = require("openai");
const { Resend } = require("resend");

// ================================
// Initialisation de Resend
// ================================
const resend = new Resend(
  process.env.RESEND_API_KEY
);

// ================================
// Initialisation de l'application
// ================================
const app = express();

// Port du serveur
const PORT = process.env.PORT || 5000;

// ================================
// Middleware
// ================================

// Permet au frontend d'appeler le backend
app.use(cors());

// Permet de lire le JSON envoyé par le frontend
app.use(express.json());

// ================================
// Initialisation du client OpenAI
// ================================
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// ================================
// Connexion à Supabase
// ================================
const ws = require("ws");
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
        realtime: {
            transport: ws
        }
  }
);

// ================================
// Chargement de la base de connaissance
// ================================

// Lecture du fichier TXT contenant
// les informations de NEXIS
const knowledgeBase = fs.readFileSync(
    "./nexis_knowledge_base.txt",
    "utf-8"
);

// ================================
// Route de test
// ================================
app.get("/", (req, res) => {
    res.send("NEXIS Chatbot Backend is running...");
});

// ================================
// Route principale du chatbot
// ================================
app.post("/chat", async (req, res) => {

    try {

        // Récupération du message envoyé
        const { message } = req.body;

        // Vérification
        if (!message) {
            return res.status(400).json({
                error: "Message is required." 
            });
        }

        // ================================
        // Appel à OpenAI
        // ================================
        const completion = await client.chat.completions.create({

            model: "gpt-4o-mini",

            messages: [

                {
                    role: "system",
                    content: `
You are the official AI assistant of NEXIS Intelligence Systems.
Your role is to help visitors understand NEXIS services.
Answer ONLY using the information provided below.
If the answer is not available in the knowledge base,
politely say that the visitor can contact NEXIS for more details.
Be professional, friendly, concise and helpful.
NEXIS KNOWLEDGE BASE:

${knowledgeBase}
`
                },

                {
                    role: "user",
                    content: message
                }
            ],

            temperature: 0.5
        });

        // Récupération de la réponse
        const reply =
            completion.choices[0].message.content;

        // send email notification to admin
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: process.env.ADMIN_EMAIL,
          subject: "New Chatbot Conversation",

          html: `
            <h2>New Chatbot Message</h2>

            <p><strong>User:</strong></p>
            <p>${message}</p>

            <hr>

            <p><strong>Bot:</strong></p>
            <p>${reply}</p>
          `
        });

        // Envoi au frontend
        res.json({
            reply
        });

        // ================================
        // Enregistrement de la conversation
        // dans Supabase
        // ================================
        const { error: supabaseError } = await supabase
        .from("chatbot_messages")
        .insert({
            user_message: message,
            bot_reply: reply,
            visitor_name: req.body.visitorName || null,
            visitor_email: req.body.visitorEmail || null,
            session_id: req.body.sessionId || null
        });

        if (supabaseError) {
        console.error("Supabase Error:", supabaseError);
        }

    } catch (error) {

        console.error("Chatbot Error:", error);

        res.status(500).json({
            error: "Something went wrong."
        });
    }
});


// =====================================================
// CONTACT FORM — SAVE TO SUPABASE FROM BACKEND
// =====================================================
app.post("/contact", async (req, res) => {
  try {
    const { name, email, businessType, solution, message } = req.body;

    if (!name || !email || !businessType || !solution || !message) {
      return res.status(400).json({
        error: "Missing required fields."
      });
    }

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        business_type: businessType,
        solution,
        message,
        status: "new"
      }
    ]);

    if (error) {
      console.log("CONTACT SUPABASE ERROR:", error);
      return res.status(500).json({
        error: "Failed to save contact request."
      });
    }

    // Send email notification to admin
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL,
      subject: "New NEXIS Contact Request",

      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Solution:</strong> ${solution}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    });


    res.json({
      success: true,
      message: "Contact request saved successfully."
    });

  } catch (error) {
    console.log("CONTACT SERVER ERROR:", error);
    res.status(500).json({
      error: "Server error."
    });
  }
});
// =====================================================
// COMMENT FORM — SAVE TO SUPABASE FROM BACKEND
// =====================================================
app.post("/comment", async (req, res) => {
  try {
    const { name, role, message } = req.body;

    if (!name || !role || !message) {
      return res.status(400).json({
        error: "Missing required fields."
      });
    }

    const { error } = await supabase.from("comments").insert([
      {
        name,
        role,
        message,
        status: "pending"
      }
    ]);

    if (error) {
      console.log("COMMENT SUPABASE ERROR:", error);
      return res.status(500).json({
        error: "Failed to save comment."
      });
    }

    res.json({
      success: true,
      message: "Comment saved successfully."
    });

    // Send email notification to admin
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL,
      subject: "New Website Comment",

      html: `
        <h2>New Comment Submitted</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>

        <p><strong>Comment:</strong></p>
        <p>${message}</p>
      `
    });

  } catch (error) {
    console.log("COMMENT SERVER ERROR:", error);
    res.status(500).json({
      error: "Server error."
    });
  }
});



// ================================
// Lancement du serveur
// ================================
app.listen(PORT, () => {

    console.log(`
=================================
NEXIS Chatbot Running
Port: ${PORT}
=================================
`);
});