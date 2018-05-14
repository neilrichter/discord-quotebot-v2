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

    let splittedMessage = message.content.split(' ');
    const options = utils.parseParams(splittedMessage);

    if (splittedMessage.length == 2) {
        message.channel.fetchMessage(splittedMessage[1])
        .then(quotedMessage => {
            message.delete();
            let data = new Discord.RichEmbed();
            data.setAuthor(`${quotedMessage.author.username} said :`, quotedMessage.author.avatarURL);
            data.setDescription(quotedMessage.content);
            data.setFooter('In this channel');
            data.setTimestamp(typeof quotedMessage.editedTimestamp != 'undefined' ? quotedMessage.editedTimestamp : quotedMessage.createdTimestamp);
            message.channel.send(data);
        })
        .catch(console.error());
    }
});

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.login(config.token);