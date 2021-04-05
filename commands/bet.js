const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'betp',
    description: "bet Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        if (botData.player1 == "000" || botData.player2 == "000" || botData.player3 == "000") return message.channel.send("3 Players Required.");
        const player1Data = await profileModel.findOne({ userID: Player1ID });
        const player2Data = await profileModel.findOne({ userID: Player2ID });
        const player3Data = await profileModel.findOne({ userID: Player3ID });
        var p1max = player1Data.dollar - 1;
        var p2max = player2Data.dollar - 1;
        var p3max = player3Data.dollar - 1;
        var p1continue = botData.Player1TurnContinue;
        var p2continue = botData.Player2TurnContinue;
        var p3continue = botData.Player3TurnContinue;
        const amount = args[0];
        const allin = args[1];
        if(amount == "all" && allin == "in"){
            message.channel.send("All in!");
        }
        else if(amount % 1 != 0){
            return message.channel.send("Value must be a whole number.");
        } 
        else if(amount < 50) {
            return message.channel.send("You must bet at least 50 dollars.");
        }
        if (amount >= p1max || amount >= p2max || amount >= p3max) {
            return message.channel.send("Amount is too big")
        }
        if (botData.BetStage == 1) {
            if (botData.Player1Turn == true) {
                if (botData.Player1State == false) {
                    try {
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $set : {
                            Player1Turn: false,
                            Player2Turn: true,
                            Player3Turn: false,
                            },
                        })
                    } catch (error) {
                        console.log(error);
                    }
                    return message.channel.send("Player 1 has folded");
                }
                if (botData.Player1State == true) {
                    if (botData.NowBetSet == false) {
                        if (amount == "all" && allin == "in") {
                            if (p1max < p2max && p1max < p3max) {
                                amount = p1max
                            }
                            else if (p2max < p1max && p2max < p3max) {
                                amount = p2max
                            }
                            else if (p3max < p2max && p3max < p1max) {
                                amount = p3max
                            }
                            else if(p1max == p2max && p1max < p3max) {
                                amount = p1max;
                            }
                            else if(p1max == p3max && p1max < p2max) {
                                amount = p1max;
                            }
                            else if(p3max == p2max && p2max < p1max) {
                                amount = p1max;
                            }
                            else if(p1max == p2max && p1max == p3max) {
                                amount = p1max;
                            }
                        }
                        try {
                        let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first()
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: true,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        Player1TurnContinue: false,
                                        },
                                        $inc : {
                                        TotalBet: amount,
                                        Player1Round: 1,
                                        },
                                    })
                                    message.channel.send("Betted " + amount);
                                } 
                                else if (message.content.toUpperCase() == 'N') {
                                message.channel.send('Cancelled');
                                }
                                else {
                                message.channel.send('Invalid response');
                                }
                                })
                                .catch(collected => {
                                    message.channel.send('Timed out');
                                });
                        })        
                        } catch (err) {
                            console.log(err);
                            }
                    }
                    if (botData.NowBetSet == true) {
                        if (amount == "all" && allin == "in") {
                            if (p1max < p2max && p1max < p3max) {
                                amount = p1max
                            }
                            else if (p2max < p1max && p2max < p3max) {
                                amount = p2max
                            }
                            else if (p3max < p2max && p3max < p1max) {
                                amount = p3max
                            }
                            else if(p1max == p2max && p1max < p3max) {
                                amount = p1max;
                            }
                            else if(p1max == p3max && p1max < p2max) {
                                amount = p1max;
                            }
                            else if(p3max == p2max && p2max < p1max) {
                                amount = p1max;
                            }
                            else if(p1max == p2max && p1max == p3max) {
                                amount = p1max;
                            }
                        }
                        if (amount < botData.NowBet) {
                            return message.channel.send("Bet must be same or bigger than previous bet.")
                        }
                        try {
                        let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first()
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: true,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        Player1TurnContinue: false,
                                        },
                                        $inc : {
                                        TotalBet: amount,
                                        Player1Round: 1,
                                        },
                                    })
                                    if (amount > botData.NowBet){
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            Player2TurnContinue: true,
                                            Player2Round: 0,    
                                            },
                                        })
                                        p2continue = true;
                                    }
                                    if (p2continue == false && botData.Player1Round == 1) {
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player1,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player2,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player3,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            BetStage: 2,    
                                            },
                                        })
                                    }
                                    message.channel.send("Betted " + amount);
                                } 
                                else if (message.content.toUpperCase() == 'N') {
                                message.channel.send('Cancelled');
                                }
                                else {
                                message.channel.send('Invalid response');
                                }
                                })
                                .catch(collected => {
                                    message.channel.send('Timed out');
                                });
                        })        
                        } catch (err) {
                            console.log(err);
                            }
                    }
                }
            }
            if (botData.Player2Turn == true) {
                if (botData.Player2State == false) {
                    try {
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $set : {
                            Player1Turn: false,
                            Player2Turn: false,
                            Player3Turn: true,
                            },
                        })
                    } catch (error) {
                        console.log(error);
                    }
                    message.channel.send("Player 2 has folded");
                }
                if (botData.Player2State == true) {
                    if (botData.NowBetSet == false) {
                        if (amount == "all" && allin == "in") {
                            if (p1max < p2max && p1max < p3max) {
                                amount = p1max
                            }
                            else if (p2max < p1max && p2max < p3max) {
                                amount = p2max
                            }
                            else if (p3max < p2max && p3max < p1max) {
                                amount = p3max
                            }
                            else if(p1max == p2max && p1max < p3max) {
                                amount = p1max;
                            }
                            else if(p1max == p3max && p1max < p2max) {
                                amount = p1max;
                            }
                            else if(p3max == p2max && p2max < p1max) {
                                amount = p1max;
                            }
                            else if(p1max == p2max && p1max == p3max) {
                                amount = p1max;
                            }
                        }
                        try {
                        let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first()
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: false,
                                        Player3Turn: true,
                                        NowBetSet: true,
                                        Player2TurnContinue: false,
                                        },
                                        $inc : {
                                        TotalBet: amount,
                                        Player2Round: 0,
                                        },
                                    })
                                    message.channel.send("Betted " + amount);
                                } 
                                else if (message.content.toUpperCase() == 'N') {
                                message.channel.send('Cancelled');
                                }
                                else {
                                message.channel.send('Invalid response');
                                }
                                })
                                .catch(collected => {
                                    message.channel.send('Timed out');
                                });
                        })        
                        } catch (err) {
                            console.log(err);
                            }
                    }
                    if (botData.NowBetSet == true) {
                        if (amount == "all" && allin == "in") {
                            if (p1max < p2max && p1max < p3max) {
                                amount = p1max
                            }
                            else if (p2max < p1max && p2max < p3max) {
                                amount = p2max
                            }
                            else if (p3max < p2max && p3max < p1max) {
                                amount = p3max
                            }
                            else if(p1max == p2max && p1max < p3max) {
                                amount = p1max;
                            }
                            else if(p1max == p3max && p1max < p2max) {
                                amount = p1max;
                            }
                            else if(p3max == p2max && p2max < p1max) {
                                amount = p1max;
                            }
                            else if(p1max == p2max && p1max == p3max) {
                                amount = p1max;
                            }
                        }
                        if (amount < botData.NowBet) {
                            return message.channel.send("Bet must be same or bigger than previous bet.")
                        }
                        try {
                        let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first()
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: false,
                                        Player3Turn: true,
                                        NowBetSet: true,
                                        Player2TurnContinue: false,
                                        },
                                        $inc : {
                                        TotalBet: amount,
                                        Player2Round: 1,
                                        },
                                    })
                                    if (amount > botData.NowBet){
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            Player3TurnContinue: true,
                                            Player3Round: 0,    
                                            },
                                        })
                                        p3continue = true;
                                    }
                                    if (p3continue == false && botData.Player2Round == 1) {
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player1,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player2,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player3,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            BetStage: 2,    
                                            },
                                        })
                                    }
                                    message.channel.send("Betted " + amount);
                                } 
                                else if (message.content.toUpperCase() == 'N') {
                                message.channel.send('Cancelled');
                                }
                                else {
                                message.channel.send('Invalid response');
                                }
                                })
                                .catch(collected => {
                                    message.channel.send('Timed out');
                                });
                        })        
                        } catch (err) {
                            console.log(err);
                            }
                    }
                }
            }
            if (botData.Player3Turn == true) {
                if (botData.Player3State == false) {
                    try {
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $set : {
                            Player1Turn: true,
                            Player2Turn: false,
                            Player3Turn: false,
                            },
                        })
                    } catch (error) {
                        console.log(error);
                    }
                    return message.channel.send("Player 3 has folded");
                }
                if (botData.Player3State == true) {
                    if (botData.NowBetSet == false) {
                        if (amount == "all" && allin == "in") {
                            if (p1max < p2max && p1max < p3max) {
                                amount = p1max
                            }
                            else if (p2max < p1max && p2max < p3max) {
                                amount = p2max
                            }
                            else if (p3max < p2max && p3max < p1max) {
                                amount = p3max
                            }
                            else if(p1max == p2max && p1max < p3max) {
                                amount = p1max;
                            }
                            else if(p1max == p3max && p1max < p2max) {
                                amount = p1max;
                            }
                            else if(p3max == p2max && p2max < p1max) {
                                amount = p1max;
                            }
                            else if(p1max == p2max && p1max == p3max) {
                                amount = p1max;
                            }
                        }
                        try {
                        let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first()
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1Turn: true,
                                        Player2Turn: false,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        Player3TurnContinue: false,
                                        },
                                        $inc : {
                                        TotalBet: amount,
                                        Player3Round: 1,
                                        },
                                    })
                                    if (p1continue == false && botData.Player3Round == 1) {
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            BetStage: 2,    
                                            },
                                        })
                                    }
                                    message.channel.send("Betted " + amount);
                                } 
                                else if (message.content.toUpperCase() == 'N') {
                                message.channel.send('Cancelled');
                                }
                                else {
                                message.channel.send('Invalid response');
                                }
                                })
                                .catch(collected => {
                                    message.channel.send('Timed out');
                                });
                        })        
                        } catch (err) {
                            console.log(err);
                            }
                    }
                    if (botData.NowBetSet == true) {
                        if (amount == "all" && allin == "in") {
                            if (p1max < p2max && p1max < p3max) {
                                amount = p1max
                            }
                            else if (p2max < p1max && p2max < p3max) {
                                amount = p2max
                            }
                            else if (p3max < p2max && p3max < p1max) {
                                amount = p3max
                            }
                            else if(p1max == p2max && p1max < p3max) {
                                amount = p1max;
                            }
                            else if(p1max == p3max && p1max < p2max) {
                                amount = p1max;
                            }
                            else if(p3max == p2max && p2max < p1max) {
                                amount = p1max;
                            }
                            else if(p1max == p2max && p1max == p3max) {
                                amount = p1max;
                            }
                        }
                        if (amount < botData.NowBet) {
                            return message.channel.send("Bet must be same or bigger than previous bet.")
                        }
                        try {
                        let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first()
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1Turn: true,
                                        Player2Turn: false,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        Player3TurnContinue: false,
                                        },
                                        $inc : {
                                        TotalBet: amount,
                                        Player3Round: 1,
                                        },
                                    })
                                    if (amount > botData.NowBet){
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            Player1TurnContinue: true,
                                            Player1Round: 0,    
                                            },
                                        })
                                        p1continue = true;
                                    }
                                    if (p1continue == false && botData.Player3Round == 1) {
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player1,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player2,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botData.player3,
                                        }, 
                                        {
                                            $inc : {
                                            dollar: -amount,
                                            },
                                        })
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $set : {
                                            BetStage: 2,    
                                            },
                                        })
                                        message.channel.send("round 2");
                                    }
                                    message.channel.send("Betted " + amount);
                                } 
                                else if (message.content.toUpperCase() == 'N') {
                                message.channel.send('Cancelled');
                                }
                                else {
                                message.channel.send('Invalid response');
                                }
                                })
                                .catch(collected => {
                                    message.channel.send('Timed out');
                                });
                        })        
                        } catch (err) {
                            console.log(err);
                            }
                    }
                }
            }
        }
        
        
    }
}