const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg11',
    description: "test11",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        var cardval = "0";
        var tostringc = "0";
        function valuecheckbc1(cardvalc , namec) { //cardval //varname
            tostringc = "";
            if(cardvalc == 1) {
                namec.number = "Ace"
            }
            else if(cardvalc == 11) {
                namec.number = "Jack"
            }
            else if(cardvalc == 12) {
                namec.number = "Queen"
            }
            else if(cardvalc == 13) {
                namec.number = "King"
            }
            else if(cardvalc <= 10) {
                tostringc = cardvalc.toString();
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
            message.channel.send(Player1Card1);
            message.channel.send(Player1Card2);
            message.channel.send(Player2Card1);
            message.channel.send(Player2Card2);
            message.channel.send(Player3Card1);
            message.channel.send(Player3Card2);
            message.channel.send(DealerCard1);
            message.channel.send(DealerCard2);
            message.channel.send(DealerCard3);
            message.channel.send(DealerCard4);
            message.channel.send(DealerCard5);
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
        message.channel.send(CardD1);
        message.channel.send(CardD2);
        message.channel.send(CardD3);
        message.channel.send(CardD4);
        message.channel.send(CardD5);
        message.channel.send(CardP1N1);
        message.channel.send(CardP1N2);
        message.channel.send(CardP2N1);
        message.channel.send(CardP2N2);
        message.channel.send(CardP3N1);
        message.channel.send(CardP3N2);
    }
}