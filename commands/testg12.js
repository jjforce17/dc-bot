const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg12',
    description: "test12",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
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
        var smolvalue = {
            c1 : 0,
            c2 : 0,
            c3 : 0,
            c4 : 0,
            c5 : 0,
        }
        var smolnumval = {
            c1 : 0,
            c2 : 0,
            c3 : 0,
            c4 : 0,
            c5 : 0,
        }
        var smolsym = {
            c1 : "",
            c2 : "",
            c3 : "",
            c4 : "",
            c5 : "",
        }
        var player = {
            p1 : 0,
            p2 : 0,
            p3 : 0,
        }
        function check(currentplayer, ucard1, ucard2) {
            var a = smolnumval.c1;
            var b = smolnumval.c2;
            var c = smolnumval.c3;
            var d = smolnumval.c4;
            var e = smolnumval.c5;
            var j = [1,1,1,1,1];
            var f = [a,b,c,d,e];
            var o = 0;
            var p = 1;
            f.sort(function(a, b) {return a - b});
            for(i = 0;i in f;i++){
            while(f[o] == f[o+p]){
                j[o] += 1;
                p += 1;
                }
                if(j[o-1] >= 3) {
                var op = j[o-1] -2;
                j[o] = j[o] - op;
                }
                if(o == 1) {
                if(j[o-2] == 4) {
                var op = j[o-2] -3;
                j[o] = j[o] - op;
                }
                }
                else {
                if(j[o-2] == 4) {
                var op = j[o-2] -3;
                j[o] = j[o] - op;
                }
                }
                p = 1;
                o += 1;
            }
            if(smolnumval.c1 == 9 && smolnumval.c2 == 10 && smolnumval.c3 == 11 && smolnumval.c4 == 12 && smolnumval.c5 == 13 && smolsym.c1 == smolsym.c2 && smolsym.c2 == smolsym.c3 && smolsym.c3 == smolsym.c4 && smolsym.c4 == smolsym.c5) {
                console.log("royalflush")
                currentplayer = currentplayer + 4500 + smolvalue.c5;
            }
            if(smolnumval.c1 == smolnumval.c2 + 1 && smolnumval.c1 == smolnumval.c3 + 2 && smolnumval.c3 == 11 && smolnumval.c4 == 12 && smolnumval.c5 == 13 && smolsym.c1 == smolsym.c2 && smolsym.c2 == smolsym.c3 && smolsym.c3 == smolsym.c4 && smolsym.c4 == smolsym.c5) {
                console.log("royalflush")
                currentplayer = currentplayer + 4500 + smolvalue.c5;
            }
        }
        function smolchecksym(sym) { //c1
            if (smolvalue.sym <= 13) {
                smolsym.sym = "diamond";
            }
            else if (14 <= smolvalue.sym && smolvalue.sym<= 26) {
                smolsym.sym = "clover";
                
            }
            else if (27 <= smolvalue.sym && smolvalue.sym <= 39) {
                smolsym.sym = "heart";
            }
            else if (40 <= smolvalue.sym && smolvalue.sym <= 52) {
                smolsym.sym = "spade";
            }
        }
        function cardvalcheck(card, name) { //value(card.value) //varname
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
        function sorter(name1, name2, nowplayer) { //p1card1, p2card2, player.p
            let ordervalue = [name1.value, name2.value, card1.value, card2.value, card3.value, card4.value, card5.value];
            let ordernumval = [name1.numval, name2.numval, card1.numval, card2.numval, card3.numval, card4.numval, card5.numval];
            ordervalue.sort(function(a, b) {return a - b});
            ordernumval.sort(function(a, b) {return a - b});
            smolvalue.c1 = ordervalue[0];
            smolvalue.c2 = ordervalue[1];
            smolvalue.c3 = ordervalue[2];
            smolvalue.c4 = ordervalue[3];
            smolvalue.c5 = ordervalue[4];
            smolnumval.c1 = ordernumval[0];
            smolnumval.c2 = ordernumval[1];
            smolnumval.c3 = ordernumval[2];
            smolnumval.c4 = ordernumval[3];
            smolnumval.c5 = ordernumval[4];
            smolchecksym(c1);
            smolchecksym(c2);
            smolchecksym(c3);
            smolchecksym(c4);
            smolchecksym(c5);
            check(nowplayer, name1, name2);
        }

    }
}