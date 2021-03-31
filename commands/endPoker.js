const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'endp',
    description: "testg5",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        try {
            await profileModel.findOneAndUpdate({ userID: botID }, 
            {$set: {
                BCard1: 0,
                BCard2: 0,
                BCard3: 0,
                BCard4: 0,
                BCard5: 0,
                player1: "000",
                player2: "000",
                player3: "000",
                BetStage: 0,
                TotalBet: 0,
                NowTurn: 0,
                GameState: 0,
                }
            }
        )
            await profileModel.findOneAndUpdate({ userID: botID }, 
            {$set: {
                BCard1: 0,
                BCard2: 0,
                BCard3: 0,
                BCard4: 0,
                BCard5: 0,
                player1: "000",
                player2: "000",
                player3: "000",
                BetStage: 0,
                TotalBet: 0,
                NowTurn: 0,
                GameState: 0,
                }
            }
        )
        } catch (err) {
            console.log(err);
            }
        
    }
}

