const TelegramBot = require("node-telegram-bot-api");
const token = "Here is your Token";
var CronJob = require("cron").CronJob;
let database = require("./db.json");

const bot = new TelegramBot(token, { polling: true });


const chatId = "Chat ID";

function checkExist(order) {
  let curDay = new Date();
  curDay = curDay.getDay();

  let paraId = database.week[curDay - 1][order - 1];
  let para = database.predmet[paraId];

  bot.sendMessage(
    chatId,
    `
__________________________
Name: ${para.name}
__________________________
Type: ${para.type}
__________________________
Link: ${para.link}
__________________________
Check in: ${para.Table}
__________________________
  `
  );
}



bot.onText(/\/getChatId/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, chatId);
});
bot.onText(/\/help@TrimiTimeBot/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,'If you have a problem, connect my creator -- @Krimston_v');
});
bot.onText(/\/call@TrimiTimeBot/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,'Your friend`s links, in a Telegram');
});
//Executable fragments
var para1 = new CronJob("42 7 * * *", function () {
  checkExist(1);
});
var para2 = new CronJob("28 9 * * *", function () {
  checkExist(2);
});
var para3 = new CronJob("12 11 * * *", function () {
  checkExist(3);
});
var para4 = new CronJob("7 13 * * *", function () {
  checkExist(4);
});
var para5 = new CronJob("52 14 * * *", function () {
  checkExist(5);
});
var para6 = new CronJob("37 16 * * *", function () {
  checkExist(6);
});

para1.start();
para2.start();
para3.start();
para4.start();
para5.start();
para6.start();
