// var admin = require("firebase-admin");
// var serviceAccount = require("./firebaseServiceAccount.json");
// admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://tg-postposting.firebaseio.com"
// });
// const db = admin.firestore();


var TelegramBot = require('node-telegram-bot-api'),

telegram = new TelegramBot("832415316:AAEWO1ptMbU9ex50t27FiW0n7pGWCNUE1Jk", { polling: true });

function sendPost(link){
  telegram.sendMessage('@peredozTikTok', link);
}
// moment is not a class, just a simple function
//var moment = require('moment');

telegram.on("text", (message) => {
    if(message.text.toLowerCase().indexOf('http://vm.tiktok.com') === 0){
        sendPost(message.text)
    }else{
      telegram.sendMessage(message.chat.id, 'idk what to do :(');
    }
});