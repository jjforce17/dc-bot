const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'fold',
    description: "fold",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        if (message.author.id == Player1ID) {
            if (botData.Player1Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
        }
        if (message.author.id == Player2ID) {
            if (botData.Player2Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
        }
        if (message.author.id == Player3ID) {
            if (botData.Player3Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
        }
        if(message.author.id == botData.player1) {
            if (botData.Player1FoldConfirm == true) {
                return message.channel.send("You have folded, continue by typing ?betp fold.")
            }
        }
        if(message.author.id == botData.player2) {
            if (botData.Player2FoldConfirm == true) {
                return message.channel.send("You have folded, continue by typing ?betp fold.")
            }
        }
        if(message.author.id == botData.player3) {
            if (botData.Player3FoldConfirm == true) {
                return message.channel.send("You have folded, continue by typing ?betp fold.")
            }
        }
        try {
            if(message.author.id == botData.player1) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                    Player1State: false,
                    Player1FoldConfirm : true,
                    },
                    $inc : {
                    PlayerAmount: -1,
                    },
                    })
            }
            if(message.author.id == botData.player2) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player2State: false,
                        Player2FoldConfirm : true,
                        },
                        $inc : {
                        PlayerAmount: -1,
                        },
                        })
            }
            if(message.author.id == botData.player3) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player3State: false,
                        Player3FoldConfirm : true,
                        },
                        $inc : {
                        PlayerAmount: -1,
                        },
                        })
            }
            
        } catch (err) {
            console.log(err);
            }
        
    }
}

