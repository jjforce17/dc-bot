const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'betp',
    description: "bet Poker",
    async execute(client, message, args, Discord, profileData) {
        function callcard4() {
            message.channel.send("The 4 cards are");
            message.channel.send(DealerCard1);
            message.channel.send(DealerCard3);
            message.channel.send(DealerCard2);
            message.channel.send(DealerCard4);
        }
        function callcard5() {
            message.channel.send("The 5 cards are");
            message.channel.send(DealerCard1);
            message.channel.send(DealerCard3);
            message.channel.send(DealerCard2);
            message.channel.send(DealerCard4);
            message.channel.send(DealerCard5);
        }
        async function EndRoundTake() {
            try {
                if (botData.Player1State == true && botData.Player1FoldConfirm == false) {
                    await profileModel.findOneAndUpdate({
                        userID: botData.player1,
                    }, 
                    {
                        $inc : {
                        dollar: -amount,
                        },
                    })
                }
                if (botData.Player2State == true && botData.Player2FoldConfirm == false) {
                    await profileModel.findOneAndUpdate({
                        userID: botData.player2,
                    }, 
                    {
                        $inc : {
                        dollar: -amount,
                        },
                    })
                }
                if (botData.Player3State == true && botData.Player3FoldConfirm == false) {
                    await profileModel.findOneAndUpdate({
                        userID: botData.player3,
                    }, 
                    {
                        $inc : {
                        dollar: -amount,
                        },
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        var DealerCard1 = botData.BCard1;
        var DealerCard2 = botData.BCard2;
        var DealerCard3 = botData.BCard3;
        var DealerCard4 = botData.BCard4;
        if (botData.GameState != 1) return message.channel.send("Game has not started.");
        var DealerCard5 = botData.BCard5;
        if (botData.player1 == "000" || botData.player2 == "000" || botData.player3 == "000") return message.channel.send("3 Players Required.");
        const player1Data = await profileModel.findOne({ userID: Player1ID });
        const player2Data = await profileModel.findOne({ userID: Player2ID });
        const player3Data = await profileModel.findOne({ userID: Player3ID });
        var p1max = player1Data.dollar - 1;
        var p2max = player2Data.dollar - 1;
        var p3max = player3Data.dollar - 1;
        var amount = args[0];
        const allin = args[1];
        var PlayerAmountLocal = botData.PlayerAmount;
        if (message.author.id == Player1ID) {
            if (botData.Player1Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
            if (botData.Player1State == false) {
                if(amount != "fold") {
                    return message.channel.send("Player 1 has folded, please use ?betp fold")
                }
            }
        }
        if (message.author.id == Player2ID) {
            if (botData.Player2Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
            if (botData.Player2State == false) {
                if(amount != "fold") {
                    return message.channel.send("Player 2 has folded, please use ?betp fold")
                }
            }
        }
        if (message.author.id == Player3ID) {
            if (botData.Player3Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
            if (botData.Player3State == false) {
                if(amount != "fold") {
                    return message.channel.send("Player 3 has folded, please use ?betp fold")
                }
            }
        }
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
                amount = p3max;
            }
            else if(p1max == p2max && p1max == p3max) {
                amount = p1max;
            }
            else {
                return message.channel.send("error");
            }
        }
        else if(amount == "fold"){
            try{
            amount = botData.NowBet;
            }catch(error) {
                console.log(error);
            }
            if (message.author.id == Player1ID) {
                if (botData.Player1State == false) {
                    if (amount == botData.Player2NowBet && botData.Player2NowBet == botData.Player3NowBet && botData.Player3NowBet == botData.NowBet) {
                        try{
                        EndRoundTake();
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $inc : {
                            TotalBet: amount * PlayerAmountLocal,
                            },
                            $set : {
                            BetStage: 2,
                            NowBet : 0,
                            Player1Turn: false,
                            Player2Turn: true,
                            Player3Turn: false,
                            NowBetSet: false,
                            },
                        })
                        message.channel.send("Player 1 has folded");
                        message.channel.send("Betted " + amount);
                        message.channel.send("round 2");
                        return callcard4();
                    }catch (error) {
                            console.log(error);
                        }
                    }
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
                    console.log("folded");
                    return message.channel.send("Player 1 has folded");
                }
                else {
                    return message.channel.send("You have not folded.");
                }
            }
            else if (message.author.id == Player2ID) {
                if (botData.Player2State == false) {
                    if (botData.Player1NowBet == amount && amount == botData.Player3NowBet && botData.Player3NowBet == botData.NowBet) {
                        try{
                        EndRoundTake();
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $inc : {
                            TotalBet: amount * PlayerAmountLocal,
                            },
                            $set : {
                            BetStage: 2,
                            NowBet : 0,
                            Player1Turn: true,
                            Player2Turn: false,
                            Player3Turn: false,
                            NowBetSet: false,
                            },
                        })
                        message.channel.send("Player 2 has folded");
                        message.channel.send("Betted " + amount);
                        message.channel.send("round 2");
                        return callcard4();
                        }catch (error) {
                            console.log(error);
                        }
                    }
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
                    console.log("folded");
                    return message.channel.send("Player 2 has folded");
                }
                else {
                    return message.channel.send("You have not folded.");
                }
            }
            else if (message.author.id == Player3ID) {
                if (botData.Player3State == false) {
                    if (botData.Player1NowBet == botData.Player2NowBett && botData.Player2NowBet == amount && amount == botData.NowBet) {
                        try{
                        EndRoundTake();
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $inc : {
                            TotalBet: amount * PlayerAmountLocal,
                            },
                            $set : {
                            BetStage: 2,
                            NowBet : 0,
                            Player1Turn: true,
                            Player2Turn: false,
                            Player3Turn: false,
                            NowBetSet: false,
                            },
                        })
                        message.channel.send("Player 3 has folded");
                        message.channel.send("Betted " + amount);
                        message.channel.send("round 2");
                        return callcard4();
                        }catch (error) {
                            console.log(error);
                        }
                    }
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
                    console.log("folded");
                    return message.channel.send("Player 3 has folded");
                }
                else {
                    return message.channel.send("You have not folded.");
                }
            }
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
                if (botData.Player1State == true) {
                    if (botData.NowBetSet == false) {
                        try {
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                            message.channel.send("Press Y to confirm, N to cancel").then(() => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 15000,
                                errors: ['time']
                             })
                            .then(async (message) => {
                                message = message.first();
                                if (message.content.toUpperCase() == 'Y') {
                                    await profileModel.findOneAndUpdate({
                                        userID: botID,
                                    }, 
                                    {
                                        $set : {
                                        NowBet : amount,
                                        Player1NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: true,
                                        Player3Turn: false,
                                        NowBetSet: true,
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
                        if (amount < botData.NowBet) {
                            return message.channel.send("Bet must be same or bigger than previous bet.")
                        }
                        try {
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
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
                                        Player1NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: true,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        },
                                    })
                                    if (amount == botData.Player2NowBet && botData.Player2NowBet == botData.Player3NowBet && botData.Player3NowBet == botData.NowBet) {
                                        EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            },
                                            $set : {
                                            BetStage: 2,
                                            NowBet : 0,
                                            Player1Turn: true,
                                            Player2Turn: false,
                                            Player3Turn: false,
                                            NowBetSet: false,
                                            },
                                        })
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        return callcard4();
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
                if (botData.Player2State == true) {
                    if (botData.NowBetSet == false) {
                        try {
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
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
                                        Player2NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: false,
                                        Player3Turn: true,
                                        NowBetSet: true,
                                        Player2TurnContinue: false,
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
                        if (amount < botData.NowBet) {
                            return message.channel.send("Bet must be same or bigger than previous bet.")
                        }
                        try {
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
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
                                        Player2NowBet : amount,
                                        Player1Turn: false,
                                        Player2Turn: false,
                                        Player3Turn: true,
                                        NowBetSet: true,
                                        Player2TurnContinue: false,
                                        },
                                    })
                                    if (botData.Player1NowBet == amount && amount == botData.Player3NowBet && botData.Player3NowBet == botData.NowBet) {
                                        EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            },
                                            $set : {
                                            BetStage: 2,
                                            NowBet : 0,
                                            Player1Turn: true,
                                            Player2Turn: false,
                                            Player3Turn: false,
                                            NowBetSet: false,
                                            },
                                        })
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        return callcard4();
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
                if (botData.Player3State == true) {
                    if (botData.NowBetSet == false) {
                        try {
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
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
                                        Player3NowBet : amount,
                                        Player1Turn: true,
                                        Player2Turn: false,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        Player3TurnContinue: false,
                                        },
                                    })
                                    if (botData.Player1NowBet == botData.Player2NowBett && botData.Player2NowBet == amount && amount == botData.NowBet) {
                                        EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            },
                                            $set : {
                                            BetStage: 2,
                                            NowBet : 0,
                                            Player1Turn: true,
                                            Player2Turn: false,
                                            Player3Turn: false,
                                            NowBetSet: false,
                                            },
                                        })
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        return callcard4();
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
                        if (amount < botData.NowBet) {
                            return message.channel.send("Bet must be same or bigger than previous bet.")
                        }
                        try {
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
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
                                        Player3NowBet : amount,
                                        Player1Turn: true,
                                        Player2Turn: false,
                                        Player3Turn: false,
                                        NowBetSet: true,
                                        Player3TurnContinue: false,
                                        },
                                    })
                                    if (botData.Player1NowBet == botData.Player2NowBett && botData.Player2NowBet == amount && amount == botData.NowBet) {
                                        EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            },
                                            $set : {
                                            BetStage: 2,
                                            NowBet : 0,
                                            Player1Turn: true,
                                            Player2Turn: false,
                                            Player3Turn: false,
                                            NowBetSet: false,
                                            },
                                        })
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        return callcard4();
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