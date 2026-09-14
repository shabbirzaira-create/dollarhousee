require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const ContactMessage = require("./models/ContactMessage");
const SEED_PRODUCTS = require("./data/products");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const API_KEY = process.env.BREVO_API_KEY;
const TO_EMAIL = process.env.RECEIVER_EMAIL;
const TO_NAME = process.env.RECEIVER_NAME || "Dollar House";
const FROM_EMAIL = process.env.SENDER_EMAIL;
const FROM_NAME = process.env.SENDER_NAME || "Dollar House Website";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/dollarhouse";

function withDbName(uri) {
  const q = uri.includes("?") ? "?" + uri.split("?")[1] : "";
  const base = uri.split("?")[0].replace(/\/+$/, "");
  const pathSegs = base.split("/");
  if (pathSegs.length > 3) return base + q;
  return base + "/dollarhouse" + q;
}
const DB_URI = withDbName(MONGODB_URI);

/* ---------------- MONGODB ---------------- */
let dbReady = false;

async function seedProducts() {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany(SEED_PRODUCTS);
    console.log(`Seeded ${SEED_PRODUCTS.length} products into MongoDB`);
  }
}

mongoose
  .connect(DB_URI, { serverSelectionTimeoutMS: 5000 })
  .then(async () => {
    dbReady = true;
    await seedProducts();
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB not connected:", err.message);
    console.error("Site will run with fallback seed data.");
  });

/* ---------------- API ---------------- */
app.get("/api/products", async (req, res) => {
  try {
    if (!dbReady) return res.json(SEED_PRODUCTS);
    const products = await Product.find().lean();
    if (products.length === 0) {
      await seedProducts();
      return res.json(await Product.find().lean());
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to load products." });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  if (dbReady) {
    try {
      await ContactMessage.create({ name, email, subject: subject || "", message });
      console.log(`Contact message saved from ${email}`);
    } catch (err) {
      console.error("MongoDB save failed:", err.message);
    }
  }

  if (!API_KEY || !TO_EMAIL || !FROM_EMAIL) {
    return res.json({ success: true });
  }

  const payload = {
    sender: { email: FROM_EMAIL, name: FROM_NAME },
    to: [{ email: TO_EMAIL, name: TO_NAME }],
    subject: subject || `New message from ${name}`,
    htmlContent: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#78350F;">New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <hr style="border:none;border-top:1px solid #E9DFC6;">
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr style="border:none;border-top:1px solid #E9DFC6;">
        <p style="color:#A8A29E;font-size:12px;">Sent from Dollar House website contact form</p>
      </div>
    `,
    replyTo: { email: email, name: name },
  };

  try {
    const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error("Brevo error:", resp.status, err);
      return res.status(502).json({ error: "Failed to send email." });
    }

    res.json({ success: true });
  } catch (e) {
    console.error("Send error:", e);
    res.status(500).json({ error: "Server error." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Dollar House running at http://localhost:${PORT}`);
});