const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true
});
const config = require("./config.js");

client.on('message', message => {
    if (message.content.split(' ')[0] == config.prefix) {
        console.log("AH, That's for me !");
    }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}`);
});

client.login(config.token);