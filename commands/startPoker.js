const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'startp',
    description: "start Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        var PlayerRandNum = Math.floor(Math.random() * 3) + 1;
        var place = 0;
        if (botData.player1 == message.author.id) return message.channel.send("You already registered.");
        if (PlayerRandNum == 1) {
            if (botData.player1 != "000") {
                while (PlayerRandNum == 1) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
        }
        else if (PlayerRandNum == 2) {
            if (botData.player2 != "000") {
                while (PlayerRandNum == 2) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            
        }
        else if (PlayerRandNum == 3) {
            if (botData.player3 != "000") {
                while (PlayerRandNum == 3) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
        }
        place = PlayerRandNum;
        if (place == 1) {
            try {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                {$set: {
                        player1: message.author.id,
                        Player1State: true,
                        Player1Round: 1,
                    }
                }
            )
            } catch (err) {
                console.log(err);
                }
        }
        if (place == 2) {
            try {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                {$set: {
                        player2: message.author.id,
                        Player2State: true,
                        Player2Round: 1,
                    }
                }
            )
            } catch (err) {
                console.log(err);
                }
        }
        if (place == 3) {
            try {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                {$set: {
                        player3: message.author.id,
                        Player3State: true,
                        Player3Round: 1,
                    }
                }
            )
            } catch (err) {
                console.log(err);
                }
        }
        if (botData.player1 != "000" && botData.player2 != "000" && botData.player3 != "000") {
            const DealerCard1 = Math.floor(Math.random() * 52) + 1;
            const DealerCard2 = Math.floor(Math.random() * 52) + 1;
            const DealerCard3 = Math.floor(Math.random() * 52) + 1;
            const DealerCard4 = Math.floor(Math.random() * 52) + 1;
            const DealerCard5 = Math.floor(Math.random() * 52) + 1;
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
            while (DealerCard4 == DealerCard3) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard5 == DealerCard4) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card1 == DealerCard5) {
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
        message.channel.send("You are" + place);
    }
}