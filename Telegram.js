const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


const token = "7038548500:AAHgWxi5d1ZJHdtkNwCUFhevgwlqT4V0RGw";

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
  bot.sendMessage(chatId, "Welcome! This is test");
});


app.get("/user/info",(req,res)=>{
  res.send("hello")
})


app.listen(4040);