const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg12',
    description: "test12",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
		var card1 = {
            value: 4,
            numval: 0,
            symbol: "",
        };
        var card2 = {
            value: 43,
            numval: 0,
            symbol: "",
        };
        var card3 = {
            value: 19,
            numval: 0,
            symbol: "",
        };
        var card4 = {
            value: 6,
            numval: 0,
            symbol: "",
        };
        var card5 = {
            value: 7,
            numval: 0,
            symbol: "",
        };
        var p1card1 = {
            value: 45,
            numval: 0,
            symbol: "",
        };
        var p1card2 = {
            value: 17,
            numval: 0,
            symbol: "",
        };
        var p2card1 = {
            value: 32,
            numval: 0,
            symbol: "",
        };
        var p2card2 = {
            value: 40,
            numval: 0,
            symbol: "",
        };
        var p3card1 = {
            value: 31,
            numval: 0,
            symbol: "",
        };
        var p3card2 = {
            value: 8,
            numval: 0,
            symbol: "",
        };
        var player = {
            p1 : 1,
            p2 : 2,
            p3 : 3,
        };
        var straightconf = false;
        var compmultarray = [0,0,0,0,0,0,0]
        var comp1 = [0,0];
        var comp2 = [0,0];
        var comp3 = [0,0];

        function comparemultiple(userc1, userc2) {
        compmultarray = [card1l.numval,card2.numval,card3.numval,card4.numval,card5.numval,userc1.numval,userc2.numval];
        for(let a1 = 0; a1 < 7; a1++){
        if(compmultarray[a1] != compmultarray[a1+1]) {
        compmultarray.splice(a1,1);
        a1 = a1 - 1;
        }
    }
        }
        function smolchecksym(namae) {
            if (namae.value <= 13) {
                namae.symbol = "diamond";
            }
            else if (14 <=namae.value && namae.value <= 26) {
                namae.symbol = "clover";
            }
            else if (27 <= namae.value && namae.value <= 39) {
                namae.symbol = "heart";
            }
            else if (40 <= namae.value && namae.value <= 52) {
                namae.symbol = "spade";
            }
        }
        function cardvalcheck(name) { //value(card.value) //varname
            if (name.value <= 13) {
                name.numval = name.value;
            }
            else if (14 <= name.value && name.value <= 26) {
                name.numval = name.value - 13;
            }
            else if (27 <= name.value && name.value <= 39) {
                name.numval = name.value - 26;
            }
            else if (40 <= name.value && name.value <= 52) {
                name.numval = name.value - 39;
            }
        }
function sorter(name1, name2, nowplayer) { //p1card1, p2card2, player.p
let ordervalue = [name1.value, name2.value, card1.value, card2.value, card3.value, card4.value, card5.value];
smolchecksym(name1);
smolchecksym(name2);
smolchecksym(card1);
smolchecksym(card2);
smolchecksym(card3);
smolchecksym(card4);
smolchecksym(card5);
cardvalcheck(name1);
cardvalcheck(name2);
cardvalcheck(card1);
cardvalcheck(card2);
cardvalcheck(card3);
cardvalcheck(card4);
cardvalcheck(card5);
let ordernumval = [name1.numval, name2.numval, card1.numval, card2.numval, card3.numval, card4.numval, card5.numval];
let orderflush = []
ordervalue.sort(function(a, b) {return a - b});
ordernumval.sort(function(a, b) {return a - b});
check(nowplayer, name1, name2, ordernumval, ordervalue);

        }
function check(currentplayer, ucard1, ucard2, numvalueorder, valueorder) {
straightconf = false;
 		var a = numvalueorder[0];
        var b = numvalueorder[1];
        var c = numvalueorder[2];
        var d = numvalueorder[3];
        var e = numvalueorder[4];
        var f = numvalueorder[5];
        var g = numvalueorder[6];
  var j = [1,1,1,1,1,1,1];
  var h = 0;
  var f = [a,b,c,d,e,f,g];
  var o = 0;
  var p = 1;
  var g = true;
  var osd = 0;
  var straightcheck = numvalueorder;
  for(i = 0; i in straightcheck; i++) {
  if (straightcheck[osd] == straightcheck[osd+1]) {
  straightcheck.splice(osd,1);
  }
  osd++
  }
while(straightcheck.length < 7) {
straightcheck.push(0);
}
  f.sort(function(a, b) {return a - b});
  for(i = 0;i in f;i++)
  {
    while(f[o] == f[o+p])
    {
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
    o += 1;
    p = 1;
  }
  j.sort();
  for(let if3 = 0;if3 <7;if3++) {
if(j[if3] == 1) {
j.splice(if3,1);
if3 = if3-1;
}
}
 var opop = 2;
  while(opop >= 0) {
	if(straightcheck[opop] == straightcheck[opop + 1] -1 && straightcheck[opop] ==  straightcheck[opop + 2] -2 && straightcheck[opop] ==  straightcheck[opop + 3] -3 && straightcheck[opop] ==  straightcheck[opop + 4] -4) {
    opop = -1;
    }
    opop = opop -1;
  }
  comparemultiple(ucard1, ucard2); 
  }

function starter() {
  sorter(p1card1, p1card2, player.p1);
  sorter(p2card1, p2card2, player.p2);
  sorter(p3card1, p3card2, player.p3);
  winner();
}
function winner () {

}





//////////////
    }
}