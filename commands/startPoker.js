const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'startp',
    description: "start Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        var PlayerRandNum = Math.floor(Math.random() * 3) + 1;
        var Place = 0;
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