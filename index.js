const Discord = require('discord.js');
const client = new Discord.Client({
    autoreconnect: true
});
const config = require('./config.js');

client.on('message', message => {
    if (message.content.split(' ')[0] != config.prefix) {
        return;
    }
});

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
})

client.login(config.token);