const Discord = require('discord.js');
const client = new Discord.Client({
    autoreconnect: true
});
const config = require('./config.js');

client.on('message', message => {
    if (message.content.split(' ')[0] != config.prefix) {
        return;
    }

    let options = {};
    message = message.content.split(' ');
    message.forEach((element, index, array) => {
        if (element.substr(0, 1) == '-') {
            options[array[index].substr(1)] = array[index+1];
            array.splice(index, 2, array.slice(index, index + 2).join(' '));
        }
    });
    for (let i = 0; i < message.length; i++) {
        if (message[i].substr(0, 1) == '-') {
            message.splice(i, 1);
            i--;
        }
    }
});

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
})

client.login(config.token);