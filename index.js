const Discord = require('discord.js');
const client = new Discord.Client({
    autoreconnect: true
});
const config = require('./config.js');
const utils = require('./utils.js');

client.on('message', message => {
    if (message.content.split(' ')[0] != config.prefix) {
        return;
    }
    message = message.content.split(' ');
    const options = utils.parseParams(message);
});

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.login(config.token);