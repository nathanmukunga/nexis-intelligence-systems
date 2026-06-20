const html = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const langButtons = document.querySelectorAll("[data-lang]");


// =====================================================
// TRANSLATIONS
// =====================================================

const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_solutions: "Solutions",
    nav_projects: "Projects",
    nav_feedback: "Feedback",
    nav_contact: "Contact",
    nav_cta: "Get Started",

    tagline: "SMART SYSTEMS. REAL GROWTH.",
    hero_title: "We build intelligent systems that drive <span>real growth.</span>",
    hero_lead: "NEXIS helps businesses automate operations, manage customers and make smarter decisions with modern web, AI, CRM and analytics solutions.",
    book_consultation: "Book a Consultation",
    view_work: "View Our Work",

    trusted_title: "Built on principles that matter.",

    services_eyebrow: "OUR SERVICES",
    services_title: "Smart solutions for modern businesses",
    services_lead: "We design digital systems that help companies work smarter, save time and increase productivity.",
    learn_more: "Learn more →",

    service_web_title: "Web Development",
    service_web_text: "Premium websites, landing pages and platforms designed to convert visitors into clients.",
    service_ai_title: "AI Solutions",
    service_ai_text: "AI assistants and smart tools for support, booking, lead generation and business tasks.",
    service_auto_title: "Business Automation",
    service_auto_text: "Workflows that connect forms, emails, WhatsApp, CRM and reports automatically.",
    service_crm_title: "CRM & Custom Systems",
    service_crm_text: "Dashboards and internal tools to manage clients, sales, appointments and operations.",

    about_eyebrow: "ABOUT NEXIS",
    about_title: "Technology with purpose. Solutions with impact.",
    about_text: "NEXIS Intelligence Systems is a technology brand focused on building reliable, beautiful and scalable digital systems for businesses ready to grow.",
    about_li1: "Innovation at the core",
    about_li2: "Quality you can trust",
    about_li3: "Solutions that scale with you",
    about_li4: "Support that truly cares",
    about_btn: "Discover More About Us",

    stat_projects: "Projects Completed",
    stat_clients: "Happy Clients",
    stat_satisfaction: "Client Satisfaction",
    stat_support: "Support Available",

    projects_eyebrow: "OUR PROJECTS",
    projects_title: "Solutions we are proud of",
    projects_lead: "Real projects. Real impact.",
    project_1_title: "E-Commerce Platform",
    project_1_text: "Full-stack online shop solution.",
    project_2_title: "AI Chat Assistant",
    project_2_text: "Virtual assistant for customer support.",
    project_3_title: "Business Dashboard",
    project_3_text: "Analytics and reporting system.",
    project_4_title: "Restaurant POS System",
    project_4_text: "Ordering, tables and kitchen tracking.",

    eco_eyebrow: "NEXIS ECOSYSTEM",
    eco_title: "One brand, multiple intelligent products.",
    eco_text: "From a professional website to an AI-powered business dashboard, NEXIS creates systems that connect together.",
    flow_lead: "Lead",
    flow_auto: "Automation",
    flow_growth: "Growth",

    feedback_eyebrow: "CLIENT FEEDBACK",
    feedback_title: "Proof that intelligent systems create business impact.",
    feedback_1: "“NEXIS helped us automate customer questions and respond faster every day.”",
    feedback_2: "“The CRM dashboard made our client follow-up much easier and more organized.”",
    feedback_3: "“Professional, clean and focused on solving the real problem, not just building a website.”",
    feedback_role_1: "Restaurant Owner",
    feedback_role_2: "Hotel Manager",
    feedback_role_3: "Beauty Business",

    comment_title: "Leave a Comment",
    comment_name: "Your name",
    comment_role: "Business / role",
    comment_message: "Write your feedback...",
    comment_btn: "Submit Comment",
    comment_note: "Thank you for your feedback. Your comment will be reviewed before being published.",

    contact_eyebrow: "CONTACT",
    contact_title: "Tell us what problem you want to solve.",
    contact_text: "Whether you need a website, CRM, AI chatbot, AI agent or complete automation system, NEXIS can help you choose the right solution.",

    form_name: "Name",
    form_email: "Email",
    form_business: "Business type",
    form_solution: "Solution needed",
    form_message: "Message",
    form_name_ph: "Your full name",
    form_email_ph: "your@email.com",
    form_business_ph: "Restaurant, hotel, beauty salon...",
    form_select: "Choose a solution",
    form_message_ph: "Explain what you want to improve in your business...",
    form_btn: "Request a Quote",

    footer_text: "Smart systems that automate, optimize and drive real growth.",
    footer_company: "Company",
    footer_about: "About Us",
    footer_feedback: "Feedback",
    footer_projects: "Projects",
    footer_services: "Services",
    footer_contact: "Contact",

    chat_welcome: "Hi, welcome to NEXIS. What system does your business need?",
    chat_opt_1: "I need a website",
    chat_opt_2: "I need an AI chatbot",
    chat_opt_3: "I need CRM",
    chat_placeholder: "Type your message...",
    chat_send: "Send",
    chat_web: "Great. A professional website can help you present your brand, receive leads and convert visitors into clients. Please leave your contact in the form.",
    chat_bot: "Perfect. An AI chatbot can answer customers, collect leads and support your business 24/7.",
    chat_crm: "Good choice. A CRM dashboard helps you manage clients, follow-ups, sales and business activity clearly.",
    chat_default: "Thank you. NEXIS can help you turn this idea into a smart digital system."
  },

  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_solutions: "Solutions",
    nav_projects: "Projets",
    nav_feedback: "Avis",
    nav_contact: "Contact",
    nav_cta: "Commencer",

    tagline: "SMART SYSTEMS. REAL GROWTH.",
    hero_title: "Nous créons des systèmes intelligents qui génèrent une <span>vraie croissance.</span>",
    hero_lead: "NEXIS aide les entreprises à automatiser leurs opérations, gérer leurs clients et prendre de meilleures décisions avec des solutions web, IA, CRM et analytics.",
    book_consultation: "Réserver une consultation",
    view_work: "Voir nos projets",

    trusted_title: "Fondé sur des principes qui comptent.",

    services_eyebrow: "NOS SERVICES",
    services_title: "Des solutions intelligentes pour les entreprises modernes",
    services_lead: "Nous concevons des systèmes digitaux qui aident les entreprises à mieux travailler, gagner du temps et augmenter leur productivité.",
    learn_more: "En savoir plus →",

    service_web_title: "Développement Web",
    service_web_text: "Sites web, landing pages et plateformes premium conçus pour convertir les visiteurs en clients.",
    service_ai_title: "Solutions IA",
    service_ai_text: "Assistants IA et outils intelligents pour le support, les réservations, les leads et les tâches business.",
    service_auto_title: "Automatisation Business",
    service_auto_text: "Des workflows qui connectent formulaires, emails, WhatsApp, CRM et rapports automatiquement.",
    service_crm_title: "CRM & Systèmes sur mesure",
    service_crm_text: "Dashboards et outils internes pour gérer clients, ventes, rendez-vous et opérations.",

    about_eyebrow: "À PROPOS DE NEXIS",
    about_title: "Une technologie utile. Des solutions avec impact.",
    about_text: "NEXIS Intelligence Systems est une marque technologique spécialisée dans la création de systèmes digitaux fiables, beaux et évolutifs pour les entreprises prêtes à grandir.",
    about_li1: "Innovation au centre",
    about_li2: "Qualité fiable",
    about_li3: "Solutions qui évoluent avec vous",
    about_li4: "Support sérieux et humain",
    about_btn: "Découvrir NEXIS",

    stat_projects: "Projets réalisés",
    stat_clients: "Clients satisfaits",
    stat_satisfaction: "Satisfaction client",
    stat_support: "Support disponible",

    projects_eyebrow: "NOS PROJETS",
    projects_title: "Des solutions dont nous sommes fiers",
    projects_lead: "De vrais projets. Un vrai impact.",
    project_1_title: "Plateforme E-Commerce",
    project_1_text: "Solution complète de boutique en ligne.",
    project_2_title: "Assistant Chat IA",
    project_2_text: "Assistant virtuel pour le support client.",
    project_3_title: "Dashboard Business",
    project_3_text: "Système d’analyse et de reporting.",
    project_4_title: "Système POS Restaurant",
    project_4_text: "Commandes, tables et suivi cuisine.",

    eco_eyebrow: "ÉCOSYSTÈME NEXIS",
    eco_title: "Une marque, plusieurs produits intelligents.",
    eco_text: "Du site professionnel au dashboard business avec IA, NEXIS crée des systèmes qui fonctionnent ensemble.",
    flow_lead: "Lead",
    flow_auto: "Automatisation",
    flow_growth: "Croissance",

    feedback_eyebrow: "AVIS CLIENTS",
    feedback_title: "La preuve que les systèmes intelligents créent un impact business.",
    feedback_1: "“NEXIS nous a aidés à automatiser les questions clients et à répondre plus vite chaque jour.”",
    feedback_2: "“Le dashboard CRM a rendu notre suivi client plus simple et mieux organisé.”",
    feedback_3: "“Professionnel, propre et concentré sur le vrai problème, pas seulement sur la création d’un site.”",
    feedback_role_1: "Propriétaire de restaurant",
    feedback_role_2: "Manager d’hôtel",
    feedback_role_3: "Business beauté",

    comment_title: "Laisser un commentaire",
    comment_name: "Votre nom",
    comment_role: "Business / rôle",
    comment_message: "Écrivez votre avis...",
    comment_btn: "Envoyer le commentaire",
    comment_note: "Merci pour votre avis. Votre commentaire sera vérifié avant publication.",

    contact_eyebrow: "CONTACT",
    contact_title: "Dites-nous quel problème vous voulez résoudre.",
    contact_text: "Que vous ayez besoin d’un site web, CRM, chatbot IA, agent IA ou système complet d’automatisation, NEXIS peut vous aider à choisir la bonne solution.",

    form_name: "Nom",
    form_email: "Email",
    form_business: "Type de business",
    form_solution: "Solution souhaitée",
    form_message: "Message",
    form_name_ph: "Votre nom complet",
    form_email_ph: "votre@email.com",
    form_business_ph: "Restaurant, hôtel, salon de beauté...",
    form_select: "Choisir une solution",
    form_message_ph: "Expliquez ce que vous voulez améliorer dans votre business...",
    form_btn: "Demander un devis",

    footer_text: "Des systèmes intelligents qui automatisent, optimisent et créent une vraie croissance.",
    footer_company: "Entreprise",
    footer_about: "À propos",
    footer_feedback: "Avis",
    footer_projects: "Projets",
    footer_services: "Services",
    footer_contact: "Contact",

    chat_welcome: "Bonjour, bienvenue chez NEXIS. De quel système votre business a-t-il besoin ?",
    chat_opt_1: "J’ai besoin d’un site web",
    chat_opt_2: "J’ai besoin d’un chatbot IA",
    chat_opt_3: "J’ai besoin d’un CRM",
    chat_placeholder: "Écrivez votre message...",
    chat_send: "Envoyer",
    chat_web: "Très bien. Un site professionnel peut présenter votre marque, recevoir des leads et convertir les visiteurs en clients. Laissez vos informations dans le formulaire.",
    chat_bot: "Parfait. Un chatbot IA peut répondre aux clients, collecter des leads et assister votre business 24h/24.",
    chat_crm: "Bon choix. Un dashboard CRM vous aide à gérer clients, suivis, ventes et activité business clairement.",
    chat_default: "Merci. NEXIS peut vous aider à transformer cette idée en système digital intelligent."
  }
};


// =====================================================
// DEMO CONTENT
// =====================================================

const demoContent = {
  en: [
    {
      id: "ai",
      title: "AI Intelligence Core",
      html: `<div class="demo-layout"><div><div class="chat"><strong>System thinking...</strong><div class="line"></div><p>Analyzing customer requests, business data and workflows in real time.</p></div><div class="mini-cards" style="margin-top:12px"><div class="mini-card"><strong>92%</strong><p>Accuracy</p></div><div class="mini-card"><strong>24/7</strong><p>Available</p></div></div></div><div class="ai-orb">AI</div></div>`
    },
    {
      id: "assistant",
      title: "AI Assistant",
      html: `<div class="demo-layout"><div class="chat"><p><b>Customer:</b> I need a reservation for tonight.</p><div class="line"></div><p><b>NEXIS AI:</b> Reservation confirmed for 8:30 PM. A reminder was sent by WhatsApp.</p><div class="line"></div><p><b>Task:</b> CRM updated automatically.</p></div><div class="ai-orb">💬</div></div>`
    },
    {
      id: "crm",
      title: "CRM Dashboard",
      html: `<div class="demo-layout"><div class="mini-cards"><div class="mini-card"><strong>482</strong><p>Customers</p></div><div class="mini-card"><strong>+31%</strong><p>New leads</p></div><div class="mini-card"><strong>64</strong><p>Deals</p></div><div class="mini-card"><strong>$12K</strong><p>Revenue</p></div></div><div class="metrics"><div class="bars"><span></span><span></span><span></span><span></span><span></span></div></div></div>`
    },
    {
      id: "pos",
      title: "Restaurant POS",
      html: `<div class="demo-layout"><div class="posbox"><p><b>Table 04</b> · Order #1284</p><div class="line"></div><p>🍔 Burger Deluxe — Preparing</p><p>🥗 Caesar Salad — Ready</p><p>🥤 Fresh Juice — Served</p></div><div class="mini-cards"><div class="mini-card"><strong>18</strong><p>Active tables</p></div><div class="mini-card"><strong>7</strong><p>Pending orders</p></div><div class="mini-card"><strong>92%</strong><p>Kitchen speed</p></div><div class="mini-card"><strong>Live</strong><p>Status</p></div></div></div>`
    },
    {
      id: "analytics",
      title: "Business Analytics",
      html: `<div class="demo-layout"><div><div class="mini-cards"><div class="mini-card"><strong>+48%</strong><p>Growth</p></div><div class="mini-card"><strong>98%</strong><p>Satisfaction</p></div></div><div class="line"></div><p>Data becomes clear reports, helping businesses understand what to improve.</p></div><div class="analytics-card"><div class="bars"><span></span><span></span><span></span><span></span><span></span></div></div></div>`
    }
  ],

  fr: [
    {
      id: "ai",
      title: "Cœur Intelligence IA",
      html: `<div class="demo-layout"><div><div class="chat"><strong>Le système analyse...</strong><div class="line"></div><p>Analyse des demandes clients, données business et workflows en temps réel.</p></div><div class="mini-cards" style="margin-top:12px"><div class="mini-card"><strong>92%</strong><p>Précision</p></div><div class="mini-card"><strong>24/7</strong><p>Disponible</p></div></div></div><div class="ai-orb">AI</div></div>`
    },
    {
      id: "assistant",
      title: "Assistant IA",
      html: `<div class="demo-layout"><div class="chat"><p><b>Client :</b> Je veux une réservation pour ce soir.</p><div class="line"></div><p><b>NEXIS IA :</b> Réservation confirmée à 20h30. Un rappel a été envoyé sur WhatsApp.</p><div class="line"></div><p><b>Tâche :</b> CRM mis à jour automatiquement.</p></div><div class="ai-orb">💬</div></div>`
    },
    {
      id: "crm",
      title: "Dashboard CRM",
      html: `<div class="demo-layout"><div class="mini-cards"><div class="mini-card"><strong>482</strong><p>Clients</p></div><div class="mini-card"><strong>+31%</strong><p>Nouveaux leads</p></div><div class="mini-card"><strong>64</strong><p>Deals</p></div><div class="mini-card"><strong>$12K</strong><p>Revenus</p></div></div><div class="metrics"><div class="bars"><span></span><span></span><span></span><span></span><span></span></div></div></div>`
    },
    {
      id: "pos",
      title: "Restaurant POS",
      html: `<div class="demo-layout"><div class="posbox"><p><b>Table 04</b> · Commande #1284</p><div class="line"></div><p>🍔 Burger Deluxe — En préparation</p><p>🥗 Salade César — Prête</p><p>🥤 Jus frais — Servi</p></div><div class="mini-cards"><div class="mini-card"><strong>18</strong><p>Tables actives</p></div><div class="mini-card"><strong>7</strong><p>Commandes</p></div><div class="mini-card"><strong>92%</strong><p>Vitesse cuisine</p></div><div class="mini-card"><strong>Live</strong><p>Statut</p></div></div></div>`
    },
    {
      id: "analytics",
      title: "Analytics Business",
      html: `<div class="demo-layout"><div><div class="mini-cards"><div class="mini-card"><strong>+48%</strong><p>Croissance</p></div><div class="mini-card"><strong>98%</strong><p>Satisfaction</p></div></div><div class="line"></div><p>Les données deviennent des rapports clairs pour comprendre quoi améliorer.</p></div><div class="analytics-card"><div class="bars"><span></span><span></span><span></span><span></span><span></span></div></div></div>`
    }
  ]
};

let currentLang = localStorage.getItem("nexis-lang") || "en";
let current = 0;


// =====================================================
// THEME SYSTEM
// =====================================================

function applyTheme() {
  const savedTheme = localStorage.getItem("nexis-theme") || "dark";
  html.dataset.theme = savedTheme;

  if (themeToggle) {
    themeToggle.textContent =
      savedTheme === "dark"
        ? currentLang === "fr"
          ? "Mode clair"
          : "Light Mode"
        : currentLang === "fr"
          ? "Mode sombre"
          : "Dark Mode";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = next;
    localStorage.setItem("nexis-theme", next);
    applyTheme();
  });
}


// =====================================================
// NAVIGATION
// =====================================================

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-menu a").forEach((a) => {
  a.addEventListener("click", () => {
    if (navMenu) navMenu.classList.remove("open");
  });
});


// =====================================================
// LANGUAGE SYSTEM
// =====================================================

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("nexis-lang", lang);
  html.lang = lang;

  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  applyTheme();
  renderDemo(current);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});


// =====================================================
// DEMO SLIDER
// =====================================================

const demoScreen = document.getElementById("demoScreen");
const demoTabs = document.querySelectorAll("#demoTabs button");
const demoDots = document.getElementById("demoDots");

function renderDemo(index) {
  if (!demoScreen || !demoDots) return;

  current = index;

  const demos = demoContent[currentLang];
  const d = demos[index];

  demoScreen.classList.remove("fade");
  void demoScreen.offsetWidth;
  demoScreen.classList.add("fade");

  demoScreen.innerHTML = `
    <div class="demo-title">
      <h3>${d.title}</h3>
      <span class="status">● Operational</span>
    </div>
    ${d.html}
  `;

  demoTabs.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  demoDots.innerHTML = demos
    .map((_, i) => `<span class="${i === index ? "active" : ""}"></span>`)
    .join("");
}

demoTabs.forEach((btn, i) => {
  btn.addEventListener("click", () => renderDemo(i));
});

setInterval(() => {
  renderDemo((current + 1) % demoContent[currentLang].length);
}, 4200);

 
// =====================================================
// CHAT WIDGET
// =====================================================

const chatBubble = document.getElementById("chatBubble");
const chatPanel = document.getElementById("chatPanel");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatMessage = document.getElementById("chatMessage");

if (chatBubble && chatPanel) {
  chatBubble.addEventListener("click", () => {
    chatPanel.classList.toggle("open");
  });
}

if (closeChat && chatPanel) {
  closeChat.addEventListener("click", () => {
    chatPanel.classList.remove("open");
  });
}

function addChatMessage(text, type = "bot") {
  if (!chatBody) return;

  const div = document.createElement("div");
  div.className = type === "user" ? "user-msg" : "bot-msg";
  div.textContent = text;

  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

document.querySelectorAll(".quick").forEach((btn) => {
  btn.addEventListener("click", () => {
    addChatMessage(btn.textContent, "user");

    const key =
      btn.dataset.answer === "website"
        ? "chat_web"
        : btn.dataset.answer === "chatbot"
          ? "chat_bot"
          : "chat_crm";

    setTimeout(() => {
      addChatMessage(translations[currentLang][key]);
    }, 400);
  });
});

if (chatForm && chatMessage) {
  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const msg = chatMessage.value.trim();
    if (!msg) return;

    addChatMessage(msg, "user");
    chatMessage.value = "";

    addChatMessage("Typing...", "bot");

    try {
      const response = await fetch("https://nexis-backend-jbpm.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: msg
        })
      });

      const data = await response.json();

      const typingMessage = chatBody.lastChild;
      if (typingMessage) typingMessage.remove();

      if (!response.ok) {
        throw new Error(data.error || "Chatbot error");
      }

      addChatMessage(data.reply, "bot");

    } catch (error) {
      const typingMessage = chatBody.lastChild;
      if (typingMessage) typingMessage.remove();

      console.log("CHATBOT ERROR:", error);
      addChatMessage("Sorry, something went wrong. Please try again.", "bot");
    }
  });
}


// =====================================================
// SPLASH LOADER
// =====================================================

const splashLoader = document.getElementById("splashLoader");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (splashLoader) splashLoader.classList.add("hide");
  }, 1200);
});


// =====================================================
// SUPABASE CONFIGURATION
// =====================================================


// =====================================================
// CUSTOM MODAL SYSTEM
// =====================================================

function showModal(type, title, message) {
  const modal = document.getElementById("customModal");
  const icon = document.getElementById("modalIcon");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");

  if (!modal || !icon || !modalTitle || !modalMessage) return;

  modalTitle.textContent = title;
  modalMessage.textContent = message;

  icon.innerHTML = type === "success" ? "✅" : "⚠️";

  modal.classList.add("show");
}

const modalClose = document.getElementById("modalClose");

if (modalClose) {
  modalClose.addEventListener("click", () => {
    const modal = document.getElementById("customModal");
    if (modal) modal.classList.remove("show");
  });
}

const customModal = document.getElementById("customModal");

if (customModal) {
  customModal.addEventListener("click", (e) => {
    if (e.target === customModal) {
      customModal.classList.remove("show");
    }
  });
}


// =====================================================
// COMMENT FORM — GET DATA AND SEND TO BACKEND
// =====================================================

const commentForm = document.querySelector("#commentForm");

if (commentForm) {
  commentForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector("#name")?.value.trim();
    const role = document.querySelector("#role")?.value.trim();
    const message = document.querySelector("#message")?.value.trim();

    if (!name || !role || !message) {
      showModal("error", "Missing Information", "Please fill in all comment fields.");
      return;
    }

    try {
      const response = await fetch("https://nexis-backend-jbpm.onrender.com/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, role, message })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      showModal("success", "Comment Submitted", "Thank you for your feedback.");
      commentForm.reset();

    } catch (error) {
      console.log("COMMENT ERROR:", error);
      showModal("error", "Comment Not Sent", "Something went wrong.");
    }
  });
}


// =====================================================
// CONTACT FORM — GET DATA AND SEND TO BACKEND
// =====================================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector("#contactName")?.value.trim();
    const email = document.querySelector("#contactEmail")?.value.trim();
    const businessType = document.querySelector("#businessType")?.value.trim();
    const solution = document.querySelector("#solution")?.value;
    const message = document.querySelector("#contactMessage")?.value.trim();

    if (!name || !email || !businessType || !solution || !message) {
      showModal("error", "Missing Information", "Please fill in all contact fields.");
      return;
    }

    try {
      const response = await fetch("https://nexis-backend-jbpm.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          businessType,
          solution,
          message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      showModal("success", "Request Sent Successfully", "Thank you for contacting NEXIS.");
      contactForm.reset();

    } catch (error) {
      console.log("CONTACT ERROR:", error);
      showModal("error", "Request Not Sent", "Something went wrong.");
    }
  });
}