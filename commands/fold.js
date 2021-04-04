const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'endp',
    description: "testg5",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        try {
            if(message.author.id == botData.player1) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player1State: false,
                        }
                    })
            }
            if(message.author.id == botData.player2) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player2State: false,
                        }
                    })
            }
            if(message.author.id == botData.player3) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player3State: false,
                        }
                    })
            }
            
        } catch (err) {
            console.log(err);
            }
        
    }
}

