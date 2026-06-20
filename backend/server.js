// ================================
// Importation des modules
// ================================
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");

// ================================
// Initialisation de l'application
// ================================
const app = express();
const PORT = process.env.PORT || 5000;

// ================================
// Middleware
// ================================
app.use(cors());
app.use(express.json());

// ================================
// Initialisation OpenAI
// ================================
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ================================
// Initialisation Resend
// ================================
const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction réutilisable pour envoyer les emails
async function sendAdminEmail(subject, html) {
  try {
    const result = await resend.emails.send({
      from: "NEXIS <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject,
      html,
    });

    console.log("RESEND RESULT:", result);

    if (result.error) {
      console.log("RESEND ERROR:", result.error);
    }

    return result;
  } catch (error) {
    console.log("RESEND CATCH ERROR:", error);
  }
}

// ================================
// Connexion à Supabase
// ================================
const ws = require("ws");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    realtime: {
      transport: ws,
    },
  }
);

// ================================
// Chargement de la base de connaissance
// ================================
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
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

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
`,
        },
        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.5,
    });

    const reply = completion.choices[0].message.content;

    // Enregistrer dans Supabase
    const { error: supabaseError } = await supabase
      .from("chatbot_messages")
      .insert({
        user_message: message,
        bot_reply: reply,
        visitor_name: req.body.visitorName || null,
        visitor_email: req.body.visitorEmail || null,
        session_id: req.body.sessionId || null,
      });

    if (supabaseError) {
      console.error("Supabase Error:", supabaseError);
    }

    // Envoyer email à l'admin
    await sendAdminEmail(
      "New Chatbot Conversation",
      `
        <h2>New Chatbot Message</h2>

        <p><strong>User:</strong></p>
        <p>${message}</p>

        <hr>

        <p><strong>Bot:</strong></p>
        <p>${reply}</p>
      `
    );

    res.json({
      reply,
    });
  } catch (error) {
    console.error("Chatbot Error:", error);

    res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

// =====================================================
// CONTACT FORM — SAVE TO SUPABASE + SEND EMAIL
// =====================================================
app.post("/contact", async (req, res) => {
  try {
    const { name, email, businessType, solution, message } = req.body;

    if (!name || !email || !businessType || !solution || !message) {
      return res.status(400).json({
        error: "Missing required fields.",
      });
    }

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        business_type: businessType,
        solution,
        message,
        status: "new",
      },
    ]);

    if (error) {
      console.log("CONTACT SUPABASE ERROR:", error);
      return res.status(500).json({
        error: "Failed to save contact request.",
      });
    }

    await sendAdminEmail(
      "New NEXIS Contact Request",
      `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Solution:</strong> ${solution}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    );

    res.json({
      success: true,
      message: "Contact request saved successfully.",
    });
  } catch (error) {
    console.log("CONTACT SERVER ERROR:", error);

    res.status(500).json({
      error: "Server error.",
    });
  }
});

// =====================================================
// COMMENT FORM — SAVE TO SUPABASE + SEND EMAIL
// =====================================================
app.post("/comment", async (req, res) => {
  try {
    const { name, role, message } = req.body;

    if (!name || !role || !message) {
      return res.status(400).json({
        error: "Missing required fields.",
      });
    }

    const { error } = await supabase.from("comments").insert([
      {
        name,
        role,
        message,
        status: "pending",
      },
    ]);

    if (error) {
      console.log("COMMENT SUPABASE ERROR:", error);
      return res.status(500).json({
        error: "Failed to save comment.",
      });
    }

    await sendAdminEmail(
      "New Website Comment",
      `
        <h2>New Comment Submitted</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>

        <p><strong>Comment:</strong></p>
        <p>${message}</p>
      `
    );

    res.json({
      success: true,
      message: "Comment saved successfully.",
    });
  } catch (error) {
    console.log("COMMENT SERVER ERROR:", error);

    res.status(500).json({
      error: "Server error.",
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