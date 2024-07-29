const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());




const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const url = "https://tap-bot-telegram-git-main-dev-1ces-projects.vercel.app/";

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            web_app: { url: url },
          },
        ],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    "Welcome! Click the button below to play the game.",
    opts
  );
});

bot.on("polling_error", (error) => {
  console.error(error);
});

bot.onText(/\/run/, (msg) => {
  const chatId = msg.chat.id;
  const url = "https://tap-bot-telegram-git-main-dev-1ces-projects.vercel.app/";

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            url: url,
          },
        ],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    "Welcome! Click the button below to play the game.",
    opts
  );
});

bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.chat);
  bot.sendMessage(chatId, `${msg.chat.first_name}`);
});


app.get("/user/info",(req,res)=>{
  let chat = {}
  bot.onText(/\/test/, (msg) => {
    chat = msg.chat/first;
  });
  res.send(chat)
})


app.listen(4040);