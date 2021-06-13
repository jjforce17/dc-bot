const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'readyp',
    description: "ready Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        if(message.channel.name != "poker1") return;
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        var PlayerRandNum = Math.floor(Math.random() * 3) + 1;
        var place = 0;
        if (botData.GameState != 0) return message.channel.send("Game has started."); 
        if (botData.player1 == message.author.id) return message.channel.send("You already registered.");
        if (botData.player2 == message.author.id) return message.channel.send("You already registered.");
        if (botData.player3 == message.author.id) return message.channel.send("You already registered.");
        if (PlayerRandNum == 1) {
            if (botData.player1 != "000" && botData.player2 != "000") {
                while (PlayerRandNum == 1 || PlayerRandNum == 2) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            else if (botData.player1 != "000" && botData.player3 != "000") {
                while (PlayerRandNum == 1 || PlayerRandNum == 3) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            else if (botData.player1 != "000") {
                while (PlayerRandNum == 1) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
        }
        else if (PlayerRandNum == 2) {
            if (botData.player2 != "000" && botData.player1 != "000") {
                while (PlayerRandNum == 2 || PlayerRandNum == 1) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            else if (botData.player2 != "000" && botData.player3 != "000") {
                while (PlayerRandNum == 2 || PlayerRandNum == 3) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            else if (botData.player2 != "000") {
                while (PlayerRandNum == 2) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            
        }
        else if (PlayerRandNum == 3) {
            if (botData.player3 != "000" && botData.player1 != "000") {
                while (PlayerRandNum == 3 || PlayerRandNum == 1) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            else if (botData.player3 != "000" && botData.player2 != "000") {
                while (PlayerRandNum == 3 || PlayerRandNum == 2) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            else if (botData.player3 != "000") {
                while (PlayerRandNum == 3) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
        }
        place = PlayerRandNum;
        if (place == 1) {
            try {
                checkPlayer1 = true;
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
                checkPlayer2 = true;
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
                checkPlayer3 = true;
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
        message.channel.send("You are turn number " + place);
    }
}