const profileModel = require('../models/profileSchema');
//check fold confrim seperate

module.exports = {
    name: 'fold',
    description: "fold",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        if(message.channel.name != "poker1") return
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        var nowbet = botData.NowBet;
        if (botData.GameState != 1) return message.channel.send("Game has not started.");
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
        try {
            if(message.author.id == botData.player1) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player1State: false,
                        Player1FoldConfirm : true,
                        p1continue : true,
                        Player1NowBet : nowbet,
                        },
                    })
                        if (botData.Player1FoldConfirm == false) {
                            await profileModel.findOneAndUpdate({ userID: botID }, 
                                {$inc : {
                                    PlayerAmount: -1,
                                    },
                                })
                        }
                    message.channel.send("You have folded, continue by typing ?betp fold.");
            }
            if(message.author.id == botData.player2) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player2State: false,
                        Player2FoldConfirm : true,
                        p2continue : true,
                        Player2NowBet : nowbet,
                        },
                    })
                        if (botData.Player2FoldConfirm == false) {
                            await profileModel.findOneAndUpdate({ userID: botID }, 
                                {$inc : {
                                    PlayerAmount: -1,
                                    },
                                })
                        }
                    message.channel.send("You have folded, continue by typing ?betp fold.");
            }
            if(message.author.id == botData.player3) {
                await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        Player3State: false,
                        Player3FoldConfirm : true,
                        p3continue : true,
                        Player3NowBet : nowbet,
                        },
                        })
                        if (botData.Player3FoldConfirm == false) {
                            await profileModel.findOneAndUpdate({ userID: botID }, 
                                {$inc : {
                                    PlayerAmount: -1,
                                    },
                                })
                        }
                    message.channel.send("You have folded, continue by typing ?betp fold.");
            }
            
        } catch (err) {
            console.log(err);
            }
        
    }
}

