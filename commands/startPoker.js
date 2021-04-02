const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'startp',
    description: "start Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        var Player1ID = botData.player1;
        var Player2ID = botData.player2;
        var Player3ID = botData.player2;
        if (botData.player1 == "000" || botData.player2 == "000" || botData.player3 == "000" ) return message.channel.send("Require 3 players")
        var place = 0;
        if (botData.player1 != "000" && botData.player2 != "000" && botData.player3 != "000" ) {
            var DealerCard1 = Math.floor(Math.random() * 52) + 1;
            var DealerCard2 = Math.floor(Math.random() * 52) + 1;
            var DealerCard3 = Math.floor(Math.random() * 52) + 1;
            var DealerCard4 = Math.floor(Math.random() * 52) + 1;
            var DealerCard5 = Math.floor(Math.random() * 52) + 1;
            var Player1Card1 = Math.floor(Math.random() * 52) + 1;
            var Player1Card2 = Math.floor(Math.random() * 52) + 1;
            var Player2Card1 = Math.floor(Math.random() * 52) + 1;
            var Player2Card2 = Math.floor(Math.random() * 52) + 1;
            var Player3Card1 = Math.floor(Math.random() * 52) + 1;
            var Player3Card2 = Math.floor(Math.random() * 52) + 1;
            while (DealerCard2 == DealerCard1 || DealerCard2 == DealerCard3 || DealerCard2 == DealerCard4 ||DealerCard2 == DealerCard5 ||DealerCard2 == Player1Card1  || DealerCard2 == Player1Card2  ||DealerCard2 == Player2Card1  ||DealerCard2 == Player2Card2  ||DealerCard2 == Player3Card1  ||DealerCard2 == Player3Card2) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard3 == DealerCard1 || DealerCard3 == DealerCard2 || DealerCard3 == DealerCard4 ||DealerCard3 == DealerCard5 ||DealerCard3 == Player1Card1  || DealerCard3 == Player1Card2  ||DealerCard3 == Player2Card1  ||DealerCard3 == Player2Card2  ||DealerCard3 == Player3Card1  ||DealerCard3 == Player3Card2) {
                DealerCard3 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard4 == DealerCard1 || DealerCard4 == DealerCard3 || DealerCard4 == DealerCard2 ||DealerCard4 == DealerCard5 ||DealerCard4 == Player1Card1  || DealerCard4 == Player1Card2  ||DealerCard4 == Player2Card1  ||DealerCard4 == Player2Card2  ||DealerCard4 == Player3Card1  ||DealerCard4 == Player3Card2) {
                DealerCard4 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard5 == DealerCard1 || DealerCard5 == DealerCard3 || DealerCard5 == DealerCard4 ||DealerCard5 == DealerCard2 ||DealerCard5 == Player1Card1  || DealerCard5 == Player1Card2  ||DealerCard5 == Player2Card1  ||DealerCard5 == Player2Card2  ||DealerCard5 == Player3Card1  ||DealerCard5 == Player3Card2) {
                DealerCard5 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card1 == DealerCard1 || Player1Card1 == DealerCard3 || Player1Card1 == DealerCard4 ||Player1Card1 == DealerCard5 ||Player1Card1 == DealerCard2 || Player1Card1 == Player1Card2  ||Player1Card1 == Player2Card1  ||Player1Card1 == Player2Card2  ||Player1Card1 == Player3Card1  ||Player1Card1 == Player3Card2) {
                Player1Card1 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card2 == DealerCard1 || Player1Card2 == DealerCard3 || Player1Card2 == DealerCard4 ||Player1Card2 == DealerCard5 ||Player1Card2 == Player1Card1 || Player1Card2 == DealerCard2  ||Player1Card2 == Player2Card1  ||Player1Card2 == Player2Card2  ||Player1Card2 == Player3Card1  ||Player1Card2 == Player3Card2) {
                Player1Card2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player2Card1 == DealerCard1 || Player2Card1 == DealerCard3 || Player2Card1 == DealerCard4 ||Player2Card1 == DealerCard5 ||Player2Card1 == Player1Card1 || Player2Card1 == Player1Card2  ||Player2Card1 == DealerCard2  ||Player2Card1 == Player2Card2  ||Player2Card1 == Player3Card1  ||Player2Card1 == Player3Card2) {
                Player2Card1 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player2Card2 == DealerCard1 || Player2Card2 == DealerCard3 || Player2Card2 == DealerCard4 ||Player2Card2 == DealerCard5 ||Player2Card2 == Player1Card1 || Player2Card2 == Player1Card2  ||Player2Card2 == Player2Card1  ||Player2Card2 == DealerCard2  ||Player2Card2 == Player3Card1  ||Player2Card2 == Player3Card2) {
                Player2Card2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player3Card1 == DealerCard1 || Player3Card1 == DealerCard3 || Player3Card1 == DealerCard4 ||Player3Card1 == DealerCard5 ||Player3Card1 == Player1Card1 || Player3Card1 == Player1Card2  ||Player3Card1 == Player2Card1  ||Player3Card1 ==  Player2Card2 ||Player3Card1 == DealerCard2  ||Player3Card1 == Player3Card2) {
                Player3Card1 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player3Card2 == DealerCard1 || Player3Card2 == DealerCard3 || Player3Card2 == DealerCard4 ||Player3Card2 == DealerCard5 ||Player3Card2 == Player1Card1 || Player3Card2 == Player1Card2  ||Player3Card2 == Player2Card1  ||Player3Card2 ==  Player2Card2 ||Player3Card2 == Player3Card1  ||Player3Card2 == DealerCard2) {
                Player3Card2 = Math.floor(Math.random() * 52) + 1;
            }
            try {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                {$set: {
                    BetStage: 1,
                    TotalBet: 0,
                    NowTurn: 1,
                    GameState: 1,
                    NowBet: 0,
                    BCard1: DealerCard1,
                    BCard2: DealerCard2,
                    BCard3: DealerCard3,
                    BCard4: DealerCard4,
                    BCard5: DealerCard5,
                    P1Card1: Player1Card1,
                    P1Card2: Player1Card2,
                    P2Card1: Player2Card1,
                    P2Card2: Player2Card2,
                    P3Card1: Player3Card1,
                    P3Card2: Player3Card2,
                    }
                }
            )
            } catch (err) {
                console.log(err);
                }
        }
        client.users.cache.get(Player1ID).send('Your cards are');
        client.users.cache.get(Player1ID).send(Player1Card1);
        client.users.cache.get(Player1ID).send(Player1Card2);
        client.users.cache.get(Player2ID).send('Your cards are');
        client.users.cache.get(Player2ID).send(Player2Card1);
        client.users.cache.get(Player2ID).send(Player2Card2);
        client.users.cache.get(Player3ID).send('Your cards are');
        client.users.cache.get(Player3ID).send(Player3Card1);
        client.users.cache.get(Player3ID).send(Player3Card2);
    }
}