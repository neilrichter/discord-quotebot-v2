const Discord = require('discord.js');
const client = new Discord.Client({
    autoreconnect: true
});
const config = require('./config.js');
const utils = require('./utils.js');
const Color = require('color');
var defaults = require('./default.json');

client.on('message', message => {
    if (message.content.split(' ')[0] != config.prefix) {
        return;
    }
    
    let splittedMessage = message.content.split(' ');

    var options = utils.parseParams(splittedMessage);
    options = utils.extendParams(options, defaults);

    if (splittedMessage[1] == 'help') {
        let help = require('./help.json')[options.lang];
        let data = new Discord.RichEmbed(); 
        data.setThumbnail(client.user.avatarURL);
        data.setColor(defaults.color);
        data.setTitle(help.title);
        data.setDescription(help.requires);
        data.addField(help.quote.usage, help.quote.desc, false);
        data.addField(help.example.title, help.example.content, false);
        data.addBlankField(false);
        data.addField("Options :", `${help.options.desc}\n${help.options.example}`, false);
        for (var i in help.options.list) {
            data.addField(`${i.replace(/(^|\s)\S/g, l => l.toUpperCase())} :`, help.options.list[i], false);
        }
        data.addBlankField(false);
        data.addField(help.warning.title, help.warning.desc, false);
        return message.channel.send(data);
    }

    if (splittedMessage.length == 2) {
        message.channel.fetchMessage(splittedMessage[1])
        .then(quotedMessage => {
            message.delete();
            let data = new Discord.RichEmbed();
            data.setColor(Color(options.color).color);
            data.setAuthor(`${quotedMessage.author.username} ${defaults.message[options.lang].said} :`, quotedMessage.author.avatarURL);
            data.setDescription(quotedMessage.content);
            data.setFooter(`${message.author.tag} ${defaults.message[options.lang].here}`);
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