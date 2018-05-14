const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true
});
const config = require("./config.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}`);
});

client.login(config.token);