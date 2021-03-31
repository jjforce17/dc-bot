const { MessageCollector } = require("discord.js");

module.exports = {
    name: 'testg7',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
            const DealerCard1 = Math.floor(Math.random() * 52) + 1;
            const DealerCard2 = Math.floor(Math.random() * 52) + 1;
            const DealerCard3 = Math.floor(Math.random() * 52) + 1;
            const Player1Card1 = Math.floor(Math.random() * 52) + 1;
            const Player1Card2 = Math.floor(Math.random() * 52) + 1;
            const Player2Card1 = Math.floor(Math.random() * 52) + 1;
            const Player2Card2 = Math.floor(Math.random() * 52) + 1;
            const Player3Card1 = Math.floor(Math.random() * 52) + 1;
            const Player3Card2 = Math.floor(Math.random() * 52) + 1;
            while (DealerCard2 == DealerCard1) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard3 == DealerCard2) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card1 == DealerCard3) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card2 == Player1Card1) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player2Card1 == Player1Card2) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player2Card2 == Player2Card1) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player3Card1 == Player2Card2) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player3Card2 == Player3Card1) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            message.channel.send(DealerCard1);
            message.channel.send(DealerCard2);
            message.channel.send(DealerCard3);
            message.channel.send(DealerCard3);
            message.channel.send(Player1Card1);
            message.channel.send(Player1Card2);
            message.channel.send(Player2Card1);
            message.channel.send(Player2Card2);
            message.channel.send(Player3Card1);
            message.channel.send(Player3Card2);
        }
    }
