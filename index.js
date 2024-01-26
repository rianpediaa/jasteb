const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const token = '6643440796:AAE2e7zdR8mMvKivHq8gQKaxD99tX6mLF8g';
const bot = new TelegramBot(token, { polling: true });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
