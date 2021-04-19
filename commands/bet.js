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
        function currentuser() {
            try {
            if(p1turnlocal = true) {
                message.channel.send("It is now " + p1user.username + "'s turn")
            }
            if(p2turnlocal = true) {
                message.channel.send("It is now " + p2user.username + "'s turn")
            }
            if(p3turnlocal = true) {
                message.channel.send("It is now " + p3user.username + "'s turn")
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
        var p1continuelocal = botData.p1continue;
        var p2continuelocal = botData.p2continue;
        var p3continuelocal = botData.p3continue;
        var amount = args[0];
        const allin = args[1];
        var PlayerAmountLocal = botData.PlayerAmount;
        var p1nowbetlocal = botData.Player1NowBet;
        var p2nowbetlocal = botData.Player2NowBet;
        var p3nowbetlocal = botData.Player3NowBet;
        var nowbetlocal = botData.NowBet;
        var p1turnlocal = botData.Player1Turn;
        var p2turnlocal = botData.Player2Turn;
        var p3turnlocal = botData.Player3Turn;
        try {
            var p1user = client.users.cache.get(botData.player1);
        } catch (error) {
            console.log(error);
        }
        try {
            var p2user = client.users.cache.get(botData.player2);
        } catch (error) {
            console.log(error);
        }
        try {
            var p3user = client.users.cache.get(botData.player3);
        } catch (error) {
            console.log(error);
        }
        if (message.author.id == Player1ID) {
            if (botData.Player1Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
            if (botData.Player1State == false) {
                if(amount != "fold") {
                    return message.channel.send(p1user.username + " has folded, please use ?betp fold")
                }
            }
        }
        if (message.author.id == Player2ID) {
            if (botData.Player2Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
            if (botData.Player2State == false) {
                if(amount != "fold") {
                    return message.channel.send(p2user.username + " has folded, please use ?betp fold")
                }
            }
        }
        if (message.author.id == Player3ID) {
            if (botData.Player3Turn == false) {
                return message.channel.send("This in not your turn yet");
            }
            if (botData.Player3State == false) {
                if(amount != "fold") {
                    return message.channel.send(p3user.username + " has folded, please use ?betp fold")
                }
            }
        }
        if (botData.Player1State == false) {
            try {
                await profileModel.findOneAndUpdate({
                    userID: botID,
                }, 
                {
                    $set : {
                    Player1NowBet: nowbetlocal,
                    },
                })
                p1nowbetlocal = nowbetlocal;
            } catch (error) {
                console.log(error);
            }
        }
        if (botData.Player2State == false) {
            try {
                await profileModel.findOneAndUpdate({
                    userID: botID,
                }, 
                {
                    $set : {
                    Player2NowBet: nowbetlocal,
                    },
                })
                p2nowbetlocal = nowbetlocal;
            } catch (error) {
                console.log(error);
            }
        }
        if (botData.Player3State == false) {
            try {
                await profileModel.findOneAndUpdate({
                    userID: botID,
                }, 
                {
                    $set : {
                    Player3NowBet: nowbetlocal,
                    },
                })
                p3nowbetlocal = nowbetlocal;
            } catch (error) {
                console.log(error);
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
                    if (amount == p2nowbetlocal && p2nowbetlocal == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
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
                            p1continue: false,
                            p2continue: false,
                            p3continue: false,
                            },
                        })
                        p1turnlocal = true;
                        p2turnlocal = false;
                        p3turnlocal = false;
                        message.channel.send(p1user.username + " has folded");
                        message.channel.send("Betted " + amount);
                        message.channel.send("round 2");
                        callcard4();
                        return currentuser();
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
                        p1turnlocal = false;
                        p2turnlocal = true;
                        p3turnlocal = false;
                    } catch (error) {
                        console.log(error);
                    }
                    console.log("folded");
                    message.channel.send(p1user.username + " has folded");
                    return currentuser();
                }
                else {
                    return message.channel.send("You have not folded.");
                }
            }
            else if (message.author.id == Player2ID) {
                if (botData.Player2State == false) {
                    if (p1nowbetlocal == amount && amount == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
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
                            p1continue: false,
                            p2continue: false,
                            p3continue: false,
                            },
                        })
                        p1turnlocal = true;
                        p2turnlocal = false;
                        p3turnlocal = false;
                        message.channel.send(p2user.username + " has folded");
                        message.channel.send("Betted " + amount);
                        message.channel.send("round 2");
                        callcard4();
                        return currentuser();
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
                        p1turnlocal = false;
                        p2turnlocal = false;
                        p3turnlocal = true;
                    } catch (error) {
                        console.log(error);
                    }
                    console.log("folded");
                    message.channel.send(p2user.username + " has folded");
                    return currentuser();
                }
                else {
                    return message.channel.send("You have not folded.");
                }
            }
            else if (message.author.id == Player3ID) {
                if (botData.Player3State == false) {
                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                        console.log("endfold3");
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
                            p1continue: false,
                            p2continue: false,
                            p3continue: false,
                            },
                        })
                        p1turnlocal = true;
                        p2turnlocal = false;
                        p3turnlocal = false;
                        message.channel.send(p3user.username + " has folded");
                        message.channel.send("Betted " + amount);
                        message.channel.send("round 2");
                        callcard4();
                        return currentuser();
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
                        p1turnlocal = true;
                        p2turnlocal = false;
                        p3turnlocal = false;
                    } catch (error) {
                        console.log(error);
                    }
                    console.log("folded");
                    message.channel.send(p3user.username + " has folded");
                    return currentuser();
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
                        let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";
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
                                        p1continue: true,
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = true;
                                    p3turnlocal = false;
                                    p1nowbetlocal =nowbetlocal;
                                    message.channel.send("Betted " + amount);
                                    return currentuser();
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
                                        p1continue: true,
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = true;
                                    p3turnlocal = false;
                                    p1continuelocal = true;
                                    p1nowbetlocal = nowbetlocal;
                                    if (amount == p2nowbetlocal && p2nowbetlocal == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
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
                                            p1continue: false,
                                            p2continue: false,
                                            p3continue: false,
                                            },
                                        })
                                        p1turnlocal = true;
                                        p2turnlocal = false;
                                        p3turnlocal = false;
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        callcard4();
                                        return currentuser();
                                    }
                                    message.channel.send("Betted " + amount);
                                    return currentuser();
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
                                        p2continue: true,
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = false;
                                    p3turnlocal = true;
                                    p2nowbetlocal = nowbetlocal;
                                    message.channel.send("Betted " + amount);
                                    return currentuser();
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
                                        p2continue: true,
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = false;
                                    p3turnlocal = true;
                                    p2nowbetlocal = nowbetlocal;
                                    p2continuelocal = true;
                                    if (p1nowbetlocal == amount && amount == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
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
                                            p1continue: false,
                                            p2continue: false,
                                            p3continue: false,
                                            },
                                        })
                                        p1turnlocal = true;
                                        p2turnlocal = false;
                                        p3turnlocal = false;
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        callcard4();
                                        return currentuser();
                                    }
                                    message.channel.send("Betted " + amount);
                                    return currentuser();
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
                                        p3continue: true,
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3continuelocal = true;
                                    p3nowbetlocal = nowbetlocal;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
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
                                            p1continue: false,
                                            p2continue: false,
                                            p3continue: false,
                                            },
                                        })
                                        p1turnlocal = true;
                                        p2turnlocal = false;
                                        p3turnlocal = false;
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        callcard4();
                                        return currentuser();
                                    }
                                    message.channel.send("Betted " + amount);
                                    return currentuser();
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
                                        p3continue: true,
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3nowbetlocal = nowbetlocal;
                                    p3continuelocal =  true;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        console.log("p3end");
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
                                            p1continue: false,
                                            p2continue: false,
                                            p3continue: false,
                                            },
                                        })
                                        p1turnlocal = true;
                                        p2turnlocal = false;
                                        p3turnlocal = false;
                                        message.channel.send("Betted " + amount);
                                        message.channel.send("round 2");
                                        callcard4();
                                        return currentuser();
                                    }
                                    message.channel.send("Betted " + amount);
                                    return currentuser();
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