const { MessageCollector } = require("discord.js");

module.exports = {
    name: 'testg7',
    description: "test7",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        var card1 = Math.floor(Math.random() * 3) + 1;
        var card2 = Math.floor(Math.random() * 3) + 1;
        var card3 = Math.floor(Math.random() * 3) + 1;
        while (card2 == card1) {
            card2 = Math.floor(Math.random() * 3) + 1;
            console.log(card2);
        }
        while (card3 == card1) {
            card3 = Math.floor(Math.random() * 3) + 1;
            console.log(card3);
        }
        while (card3 == card2) {
            card2 = Math.floor(Math.random() * 3) + 1;
            console.log(card3);
        }
        message.channel.send(card1);
        message.channel.send(card2);
        message.channel.send(card3);
        }
    }
