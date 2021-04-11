const { MessageCollector } = require("discord.js");

module.exports = {
    name: 'testg7',
    description: "test7",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
            var DealerCard1 = Math.floor(Math.random() * 12) + 1;
            var DealerCard2 = Math.floor(Math.random() * 12) + 1;
            var DealerCard3 = Math.floor(Math.random() * 12) + 1;
            var DealerCard4 = Math.floor(Math.random() * 12) + 1;
            var DealerCard5 = Math.floor(Math.random() * 12) + 1;
            var Player1Card1 = Math.floor(Math.random() * 12) + 1;
            var Player1Card2 = Math.floor(Math.random() * 12) + 1;
            var Player2Card1 = Math.floor(Math.random() * 12) + 1;
            var Player2Card2 = Math.floor(Math.random() * 12) + 1;
            var Player3Card1 = Math.floor(Math.random() * 12) + 1;
            var Player3Card2 = Math.floor(Math.random() * 12) + 1;
            while (DealerCard2 == DealerCard1 || DealerCard2 == DealerCard3 || DealerCard2 == DealerCard4 ||DealerCard2 == DealerCard5 ||DealerCard2 == Player1Card1  || DealerCard2 == Player1Card2  ||DealerCard2 == Player2Card1  ||DealerCard2 == Player2Card2  ||DealerCard2 == Player3Card1  ||DealerCard2 == Player3Card2) {
                DealerCard2 = Math.floor(Math.random() * 12) + 1;
                console.log("2");
            }
            while (DealerCard3 == DealerCard1 || DealerCard3 == DealerCard2 || DealerCard3 == DealerCard4 ||DealerCard3 == DealerCard5 ||DealerCard3 == Player1Card1  || DealerCard3 == Player1Card2  ||DealerCard3 == Player2Card1  ||DealerCard3 == Player2Card2  ||DealerCard3 == Player3Card1  ||DealerCard3 == Player3Card2) {
                DealerCard3 = Math.floor(Math.random() * 12) + 1;
                console.log("3");
            }
            while (DealerCard4 == DealerCard1 || DealerCard4 == DealerCard3 || DealerCard4 == DealerCard2 ||DealerCard4 == DealerCard5 ||DealerCard4 == Player1Card1  || DealerCard4 == Player1Card2  ||DealerCard4 == Player2Card1  ||DealerCard4 == Player2Card2  ||DealerCard4 == Player3Card1  ||DealerCard4 == Player3Card2) {
                DealerCard4 = Math.floor(Math.random() * 12) + 1;
                console.log("4");
            }
            while (DealerCard5 == DealerCard1 || DealerCard5 == DealerCard3 || DealerCard5 == DealerCard4 ||DealerCard5 == DealerCard2 ||DealerCard5 == Player1Card1  || DealerCard5 == Player1Card2  ||DealerCard5 == Player2Card1  ||DealerCard5 == Player2Card2  ||DealerCard5 == Player3Card1  ||DealerCard5 == Player3Card2) {
                DealerCard5 = Math.floor(Math.random() * 12) + 1;
                console.log("5");
            }
            while (Player1Card1 == DealerCard1 || Player1Card1 == DealerCard3 || Player1Card1 == DealerCard4 ||Player1Card1 == DealerCard5 ||Player1Card1 == DealerCard2 || Player1Card1 == Player1Card2  ||Player1Card1 == Player2Card1  ||Player1Card1 == Player2Card2  ||Player1Card1 == Player3Card1  ||Player1Card1 == Player3Card2) {
                Player1Card1 = Math.floor(Math.random() * 12) + 1;
                console.log("6");
            }
            while (Player1Card2 == DealerCard1 || Player1Card2 == DealerCard3 || Player1Card2 == DealerCard4 ||Player1Card2 == DealerCard5 ||Player1Card2 == Player1Card1 || Player1Card2 == DealerCard2  ||Player1Card2 == Player2Card1  ||Player1Card2 == Player2Card2  ||Player1Card2 == Player3Card1  ||Player1Card2 == Player3Card2) {
                Player1Card2 = Math.floor(Math.random() * 12) + 1;
                console.log("7");
            }
            while (Player2Card1 == DealerCard1 || Player2Card1 == DealerCard3 || Player2Card1 == DealerCard4 ||Player2Card1 == DealerCard5 ||Player2Card1 == Player1Card1 || Player2Card1 == Player1Card2  ||Player2Card1 == DealerCard2  ||Player2Card1 == Player2Card2  ||Player2Card1 == Player3Card1  ||Player2Card1 == Player3Card2) {
                Player2Card1 = Math.floor(Math.random() * 12) + 1;
                console.log("8");
            }
            while (Player2Card2 == DealerCard1 || Player2Card2 == DealerCard3 || Player2Card2 == DealerCard4 ||Player2Card2 == DealerCard5 ||Player2Card2 == Player1Card1 || Player2Card2 == Player1Card2  ||Player2Card2 == Player2Card1  ||Player2Card2 == DealerCard2  ||Player2Card2 == Player3Card1  ||Player2Card2 == Player3Card2) {
                Player2Card2 = Math.floor(Math.random() * 12) + 1;
                console.log("9");
            }
            while (Player3Card1 == DealerCard1 || Player3Card1 == DealerCard3 || Player3Card1 == DealerCard4 ||Player3Card1 == DealerCard5 ||Player3Card1 == Player1Card1 || Player3Card1 == Player1Card2  ||Player3Card1 == Player2Card1  ||Player3Card1 ==  Player2Card2 ||Player3Card1 == DealerCard2  ||Player3Card1 == Player3Card2) {
                Player3Card1 = Math.floor(Math.random() * 12) + 1;
                console.log("10");
            }
            while (Player3Card2 == DealerCard1 || Player3Card2 == DealerCard3 || Player3Card2 == DealerCard4 ||Player3Card2 == DealerCard5 ||Player3Card2 == Player1Card1 || Player3Card2 == Player1Card2  ||Player3Card2 == Player2Card1  ||Player3Card2 ==  Player2Card2 ||Player3Card2 == Player3Card1  ||Player3Card2 == DealerCard2) {
                Player3Card2 = Math.floor(Math.random() * 12) + 1;
                console.log("11");
            }
        message.channel.send(DealerCard1);
        message.channel.send(DealerCard2);
        message.channel.send(DealerCard3);
        message.channel.send(DealerCard4);
        message.channel.send(DealerCard5);
        message.channel.send(Player1Card1);
        message.channel.send(Player1Card2);
        message.channel.send(Player2Card1);
        message.channel.send(Player2Card2);
        message.channel.send(Player3Card1);
        message.channel.send(Player3Card2);
        console.log("done");
        }
    }
