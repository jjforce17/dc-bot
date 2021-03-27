const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg5',
    description: "testg5",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        const botID = "803868333341802499";
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
                }
            }
        )
        } catch (err) {
            console.log(err);
            }
        
    }
}

