const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'startp',
    description: "start Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        if(message.channel.name != "poker1") return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        var Player1ID = botData.player1;
        var Player2ID = botData.player2;
        var Player3ID = botData.player3;
        var amount = 50;
        var cardval = "0";
        var tostringc = "0";
        var unit = 0;
        function valuecheckbc1(cardvalc , namec) { //cardval //varname
            tostringc = "";
            if(cardvalc == 13) {
                namec.number = "Ace"
            }
            else if(cardvalc == 10) {
                namec.number = "Jack"
            }
            else if(cardvalc == 11) {
                namec.number = "Queen"
            }
            else if(cardvalc == 12) {
                namec.number = "King"
            }
            else if(cardvalc <= 9) {
                unit = cardvalc + 1;
                tostringc = unit.toString();
                namec.number = tostringc;
            }
        }
        function cardsym(card, name) { //value(card.value) //varname
            cardval = 0;
            if (card <= 13) {
                name.symbol = "diamond";
                cardval = card;
                valuecheckbc1(cardval, name);
            }
            else if (14 <= card && card <= 26) {
                name.symbol = "clover";
                cardval = card - 13;
                valuecheckbc1(cardval, name);
            }
            else if (27 <= card && card <= 39) {
                name.symbol = "heart";
                cardval = card - 26;
                valuecheckbc1(cardval, name);
            }
            else if (40 <= card && card <= 52) {
                name.symbol = "spade";
                cardval = card - 39;
                valuecheckbc1(cardval, name);
            }
        }
        if (botData.GameState != 0) return message.channel.send("Game has started."); 
        if (botData.player1 == "000" || botData.player2 == "000" || botData.player3 == "000" ) return message.channel.send("Require 3 players")
        if (botData.player1 != "000" && botData.player2 != "000" && botData.player3 != "000" ) {
            var DealerCard1 = Math.floor(Math.random() * 52) + 1;
            var DealerCard2 = Math.floor(Math.random() * 52) + 1;
            var DealerCard3 = Math.floor(Math.random() * 52) + 1;
            var DealerCard4 = Math.floor(Math.random() * 52) + 1;
            var DealerCard5 = Math.floor(Math.random() * 52) + 1;
            var Player1Card1 = Math.floor(Math.random() * 52) + 1;
            var Player1Card2 = Math.floor(Math.random() * 52) + 1;
            var Player2Card1 = Math.floor(Math.random() * 52) + 1;
            var Player2Card2 = Math.floor(Math.random() * 52) + 1;
            var Player3Card1 = Math.floor(Math.random() * 52) + 1;
            var Player3Card2 = Math.floor(Math.random() * 52) + 1;
            while (DealerCard2 == DealerCard1 || DealerCard2 == DealerCard3 || DealerCard2 == DealerCard4 ||DealerCard2 == DealerCard5 ||DealerCard2 == Player1Card1  || DealerCard2 == Player1Card2  ||DealerCard2 == Player2Card1  ||DealerCard2 == Player2Card2  ||DealerCard2 == Player3Card1  ||DealerCard2 == Player3Card2) {
                DealerCard2 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard3 == DealerCard1 || DealerCard3 == DealerCard2 || DealerCard3 == DealerCard4 ||DealerCard3 == DealerCard5 ||DealerCard3 == Player1Card1  || DealerCard3 == Player1Card2  ||DealerCard3 == Player2Card1  ||DealerCard3 == Player2Card2  ||DealerCard3 == Player3Card1  ||DealerCard3 == Player3Card2) {
                DealerCard3 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard4 == DealerCard1 || DealerCard4 == DealerCard3 || DealerCard4 == DealerCard2 ||DealerCard4 == DealerCard5 ||DealerCard4 == Player1Card1  || DealerCard4 == Player1Card2  ||DealerCard4 == Player2Card1  ||DealerCard4 == Player2Card2  ||DealerCard4 == Player3Card1  ||DealerCard4 == Player3Card2) {
                DealerCard4 = Math.floor(Math.random() * 52) + 1;
            }
            while (DealerCard5 == DealerCard1 || DealerCard5 == DealerCard3 || DealerCard5 == DealerCard4 ||DealerCard5 == DealerCard2 ||DealerCard5 == Player1Card1  || DealerCard5 == Player1Card2  ||DealerCard5 == Player2Card1  ||DealerCard5 == Player2Card2  ||DealerCard5 == Player3Card1  ||DealerCard5 == Player3Card2) {
                DealerCard5 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card1 == DealerCard1 || Player1Card1 == DealerCard3 || Player1Card1 == DealerCard4 ||Player1Card1 == DealerCard5 ||Player1Card1 == DealerCard2 || Player1Card1 == Player1Card2  ||Player1Card1 == Player2Card1  ||Player1Card1 == Player2Card2  ||Player1Card1 == Player3Card1  ||Player1Card1 == Player3Card2) {
                Player1Card1 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player1Card2 == DealerCard1 || Player1Card2 == DealerCard3 || Player1Card2 == DealerCard4 ||Player1Card2 == DealerCard5 ||Player1Card2 == Player1Card1 || Player1Card2 == DealerCard2  ||Player1Card2 == Player2Card1  ||Player1Card2 == Player2Card2  ||Player1Card2 == Player3Card1  ||Player1Card2 == Player3Card2) {
                Player1Card2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player2Card1 == DealerCard1 || Player2Card1 == DealerCard3 || Player2Card1 == DealerCard4 ||Player2Card1 == DealerCard5 ||Player2Card1 == Player1Card1 || Player2Card1 == Player1Card2  ||Player2Card1 == DealerCard2  ||Player2Card1 == Player2Card2  ||Player2Card1 == Player3Card1  ||Player2Card1 == Player3Card2) {
                Player2Card1 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player2Card2 == DealerCard1 || Player2Card2 == DealerCard3 || Player2Card2 == DealerCard4 ||Player2Card2 == DealerCard5 ||Player2Card2 == Player1Card1 || Player2Card2 == Player1Card2  ||Player2Card2 == Player2Card1  ||Player2Card2 == DealerCard2  ||Player2Card2 == Player3Card1  ||Player2Card2 == Player3Card2) {
                Player2Card2 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player3Card1 == DealerCard1 || Player3Card1 == DealerCard3 || Player3Card1 == DealerCard4 ||Player3Card1 == DealerCard5 ||Player3Card1 == Player1Card1 || Player3Card1 == Player1Card2  ||Player3Card1 == Player2Card1  ||Player3Card1 ==  Player2Card2 ||Player3Card1 == DealerCard2  ||Player3Card1 == Player3Card2) {
                Player3Card1 = Math.floor(Math.random() * 52) + 1;
            }
            while (Player3Card2 == DealerCard1 || Player3Card2 == DealerCard3 || Player3Card2 == DealerCard4 ||Player3Card2 == DealerCard5 ||Player3Card2 == Player1Card1 || Player3Card2 == Player1Card2  ||Player3Card2 == Player2Card1  ||Player3Card2 ==  Player2Card2 ||Player3Card2 == Player3Card1  ||Player3Card2 == DealerCard2) {
                Player3Card2 = Math.floor(Math.random() * 52) + 1;
            }
                var Dealer1 = {
                    value: DealerCard1,
                    symbol: "",
                    number: "",
                };
                var Dealer2 = {
                    value: DealerCard2,
                    symbol: "",
                    number: "",
                };
                var Dealer3 = {
                    value: DealerCard3,
                    symbol: "",
                    number: "",
                };
                var Dealer4 = {
                    value: DealerCard4,
                    symbol: "",
                    number: "",
                };
                var Dealer5 = {
                    value: DealerCard5,
                    symbol: "",
                    number: "",
                };
                var P1N1 = {
                    value: Player1Card1,
                    symbol: "",
                    number: "",
                };
                var P1N2 = {
                    value: Player1Card2,
                    symbol: "",
                    number: "",
                };
                var P2N1 = {
                    value: Player2Card1,
                    symbol: "",
                    number: "",
                };
                var P2N2 = {
                    value: Player2Card2,
                    symbol: "",
                    number: "",
                };
                var P3N1 = {
                    value: Player3Card1,
                    symbol: "",
                    number: "",
                };
                var P3N2 = {
                    value: Player3Card2,
                    symbol: "",
                    number: "",
                };
                cardsym(Dealer1.value, Dealer1);
                cardsym(Dealer2.value, Dealer2);
                cardsym(Dealer3.value, Dealer3);
                cardsym(Dealer4.value, Dealer4);
                cardsym(Dealer5.value, Dealer5);
                cardsym(P1N1.value, P1N1);
                cardsym(P1N2.value, P1N2);
                cardsym(P2N1.value, P2N1);
                cardsym(P2N2.value, P2N2);
                cardsym(P3N1.value, P3N1);
                cardsym(P3N2.value, P3N2);
                var CardD1 = Dealer1.number + " " + Dealer1.symbol;
                var CardD2 = Dealer2.number + " " + Dealer2.symbol;
                var CardD3 = Dealer3.number + " " + Dealer3.symbol;
                var CardD4 = Dealer4.number + " " + Dealer4.symbol;
                var CardD5 = Dealer5.number + " " + Dealer5.symbol;
                var CardP1N1 = P1N1.number + " " + P1N1.symbol;
                var CardP1N2 = P1N2.number + " " + P1N2.symbol;
                var CardP2N1 = P2N1.number + " " + P2N1.symbol;
                var CardP2N2 = P2N2.number + " " + P2N2.symbol;
                var CardP3N1 = P3N1.number + " " + P3N1.symbol;
                var CardP3N2 = P3N2.number + " " + P3N2.symbol;
                try {
                    await profileModel.findOneAndUpdate({ userID: botID }, 
                    {$set: {
                        BetStage: 1,
                        TotalBet: 0,
                        NowTurn: 1,
                        GameState: 1,
                        NowBet: 0,
                        BCard1: DealerCard1,
                        BCard2: DealerCard2,
                        BCard3: DealerCard3,
                        BCard4: DealerCard4,
                        BCard5: DealerCard5,
                        P1Card1: Player1Card1,
                        P1Card2: Player1Card2,
                        P2Card1: Player2Card1,
                        P2Card2: Player2Card2,
                        P3Card1: Player3Card1,
                        P3Card2: Player3Card2,
                        Player1Turn: true,
                        Player2Turn: false,
                        Player3Turn: false,
                        Player1State: true,
                        Player2State: true,
                        Player3State: true,
                        NowBetSet: false,
                        Player1TurnContinue: false,
                        Player2TurnContinue: false,
                        Player3TurnContinue: false,
                        Player1Round: 0,
                        Player2Round: 0,
                        Player3Round: 0,
                        PlayerAmount: 3,
                        Player1FoldConfirm : false,
                        Player2FoldConfirm : false,
                        Player3FoldConfirm : false,
                        Player1NowBet: 0,
                        Player2NowBet: 0,
                        Player3NowBet: 0, 
                        D1N: CardD1,
                        D2N: CardD2,
                        D3N: CardD3,
                        D4N: CardD4,
                        D5N: CardD5,
                        }
                    }
                )
                await profileModel.findOneAndUpdate({ userID: Player1ID }, 
                    {$inc : {
                            dollar: -amount,
                            },
                        }
                    )
                await profileModel.findOneAndUpdate({ userID: Player2ID }, 
                    {$inc : {
                            dollar: -amount,
                            },
                        }
                    )
                await profileModel.findOneAndUpdate({ userID: Player3ID }, 
                    {$inc : {
                            dollar: -amount,
                            },
                        }
                    )  
                    await profileModel.findOneAndUpdate({ userID: botID }, 
                        {$inc : {
                                TotalBet: amount * 3,
                                },
                            }
                        )    
                } catch (err) {
                    console.log(err);
                    }
                client.users.cache.get(Player1ID).send('Your cards are');
                client.users.cache.get(Player1ID).send(CardP1N1);
                client.users.cache.get(Player1ID).send(CardP1N2);
                client.users.cache.get(Player2ID).send('Your cards are');
                client.users.cache.get(Player2ID).send(CardP2N1);
                client.users.cache.get(Player2ID).send(CardP2N2);
                client.users.cache.get(Player3ID).send('Your cards are');
                client.users.cache.get(Player3ID).send(CardP3N1);
                client.users.cache.get(Player3ID).send(CardP3N2);
                message.channel.send("The 3 cards are");
                message.channel.send(CardD1);
                message.channel.send(CardD2);
                message.channel.send(CardD3);
        }
        
    }
}