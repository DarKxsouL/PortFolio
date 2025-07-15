import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = `🆕 New Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    });

    const data = await response.json();

    if (data.ok) {
      res.json({ success: true });
    } else {
      res.status(500).json({ success: false, error: data.description });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: 'Telegram error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
