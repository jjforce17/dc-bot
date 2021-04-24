const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg12',
    description: "test12",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        card1 = botData.BCard1;
        card2 = botData.BCard2;
        card3 = botData.BCard3;
        card4 = botData.BCard4;
        card5 = botData.BCard5;
        p1card1 = botData.P1Card1;
        p1card2 = botData.P1Card2;
        p2card1 = botData.P2Card1;
        p2card2 = botData.P2Card2;
        p3card1 = botData.P3Card1;
        p3card2 = botData.P3Card2;
        var card1 = {
            value: botData.BCard1,
            numval: 0,
        };
        var card2 = {
            value: botData.BCard2,
            numval: 0,
        };
        var card3 = {
            value: botData.BCard3,
            numval: 0,
        };
        var card4 = {
            value: botData.BCard4,
            numval: 0,
        };
        var card5 = {
            value: botData.BCard5,
            numval: 0,
        };
        var p1card1 = {
            value: botData.P1Card1,
            numval: 0,
        };
        var p1card2 = {
            value: botData.P1Card2,
            numval: 0,
        };
        var p2card1 = {
            value: botData.P2Card1,
            numval: 0,
        };
        var p2card2 = {
            value: botData.P2Card2,
            numval: 0,
        };
        var p3card1 = {
            value: botData.P3Card1,
            numval: 0,
        };
        var p3card2 = {
            value: botData.P3Card2,
            numval: 0,
        };
        function cardsym(card, name) { //value(card.value) //varname
            if (card <= 13) {
                name.numval = card;
            }
            else if (14 <= card && card <= 26) {
                name.numval = card - 13;
            }
            else if (27 <= card && card <= 39) {
                name.numval = card - 26;
            }
            else if (40 <= card && card <= 52) {
                name.numval = card - 39;
            }
        }
        function check(name1, name2) { //p1card1, p2card2
            
        }

    }
}