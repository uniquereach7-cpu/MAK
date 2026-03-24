const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = "YOUR_TOKEN";
const PHONE_ID = "YOUR_PHONE_ID";

app.post("/send", async (req, res) => {

  const { name, email, phone, service, message } = req.body;

  const text =
`New Lead

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

  try {

    await fetch(
      `https://graph.facebook.com/v19.0/${PHONE_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "91XXXXXXXXXX",
          type: "text",
          text: { body: text },
        }),
      }
    );

    res.send({ ok: true });

  } catch (e) {
    console.log(e);
    res.send({ ok: false });
  }

});

app.listen(3000, () => {
  console.log("Server running on 3000");
});