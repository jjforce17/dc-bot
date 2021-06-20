const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'betp',
    description: "bet Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        if(message.channel.name != "poker1") return;
        function callcard4() {
            message.channel.send("Round 2");
            message.channel.send("The 4 cards are");
            message.channel.send(botData.D1N);
            message.channel.send(botData.D2N);
            message.channel.send(botData.D3N);
            message.channel.send(botData.D4N);
        }
        function callcard5() {
            message.channel.send("Round 3");
            message.channel.send("The 5 cards are");
            message.channel.send(botData.D1N);
            message.channel.send(botData.D2N);
            message.channel.send(botData.D3N);
            message.channel.send(botData.D4N);
            message.channel.send(botData.D5N);
        }
        var card1 = {
            value: botData.BCard1,
            numval: 0,
            symbol: "",
        };
        var card2 = {
            value: botData.BCard2,
            numval: 0,
            symbol: "",
        };
        var card3 = {
            value: botData.BCard3,
            numval: 0,
            symbol: "",
        };
        var card4 = {
            value: botData.BCard4,
            numval: 0,
            symbol: "",
        };
        var card5 = {
            value: botData.BCard5,
            numval: 0,
            symbol: "",
        };
        var p1card1 = {
            value: botData.P1Card1,
            numval: 0,
            symbol: "",
        };
        var p1card2 = {
            value: botData.P1Card2,
            numval: 0,
            symbol: "",
        };
        var p2card1 = {
            value: botData.P2Card1,
            numval: 0,
            symbol: "",
        };
        var p2card2 = {
            value: botData.P2Card2,
            numval: 0,
            symbol: "",
        };
        var p3card1 = {
            value: botData.P3Card1,
            numval: 0,
            symbol: "",
        };
        var p3card2 = {
            value: botData.P3Card2,
            numval: 0,
            symbol: "",
        };
        var player = {
            p1 : 1,
            p2 : 2,
            p3 : 3,
        };
        var straightconf = false;
        var compmultarray = [0,0,0,0,0,0,0];
        var mult1 = [0,0];
        var mult2 = [0,0];
        var mult3 = [0,0];
        var mult4 = 0;
        var mult5 = 0;
        var stret1 = 0;
        var stret2 = 0;
        var maxcval = 0;
        var maxcsym = "";
        var maxcval1 = 0;
        var maxcval2 = 0;
        var maxcval3 = 0;
        var maxcval4 = 0;
        var maxcval5 = [0,0,0,0];
        var maxcval2 = 0;
        var maxcsym2 = "";
        var maxcval21 = 0;
        var maxcval22 = 0;
        var maxcval25 = [0,0];
        var rfc = false;
        var sfc = false;
        var fkc = false;
        var fhc = false;
        var flc = false;
        var stc = false;
        var tkc = false;
        var tpc = false;
        var opc = false;
        var ucardsc = 0;
        var add1 = 0;
        var add2 = 0;
        var add3 = 0;
        var add4 = 0;
        var addition1 = 0;
        var flushsnv = [];
        var flushhnv = [];
        var flushcnv = [];
        var flushdnv = [];
        var flush1 = 0;
        var flush2 = 0;
        var sflush1 = 0;
        var sflush2 = 0;
        
        
        function compareflush(ucard1,ucard2) {
        compareflush2(card1);
        compareflush2(card2);
        compareflush2(card3);
        compareflush2(card4);
        compareflush2(card5);
        compareflush2(ucard1);
        compareflush2(ucard2);
        compareflush3(ucard1,ucard2);
        }
        
        function compareflush2(cardf) {
        
        if(39 < cardf.value && cardf.value <= 52){
        flushsnv.push(cardf.numval);
        }
        else if(26 < cardf.value && cardf.value <= 39){
        flushhnv.push(cardf.numval);

        }
        else if(13 < cardf.value && cardf.value <= 26){
        flushcnv.push(cardf.numval);

        }
        else if(cardf.value <= 13){
        flushdnv.push(cardf.numval);
		}
        
        }
        
        function compareflush3(ucard1, ucard2){
        if(flushsnv.length >= 5 && (flushsnv.includes(ucard1.numval) || flushsnv.includes(ucard2.numval))){
        flc = true;
        flushsnv.sort(function(a,b){return b - a});
        flush1 = flushsnv[0] * 10 + 4;
        if(flushsnv.includes(ucard1.numval) && flushsnv.includes(ucard2.numval)) {
        if(ucard2.numval > ucard1.numval) {
        flush2  = ucard2.numval * 10 + 4;
        }
        else if(ucard2.numval < ucard1.numval) {
        flush2  = ucard1.numval * 10 + 4;
        }
        }
        if(flushsnv.includes(ucard1.numval) && !flushsnv.includes(ucard2.numval)) {
        flush2  = ucard1.numval * 10 + 4;
        }
        if(!flushsnv.includes(ucard1.numval) && flushsnv.includes(ucard2.numval)) {
        flush2  = ucard2.numval * 10 + 4;
        }
        compareflush4(flushsnv, 4, ucard1, ucard2);
        }
        else if(flushhnv.length >= 5 && (flushhnv.includes(ucard1.numval) || flushhnv.includes(ucard2.numval))){
        flc = true;
        flushhnv.sort(function(a,b){return b - a});
        flush1 = flushhnv[0] * 10 + 3;
        if(flushhnv.includes(ucard1.numval) && flushhnv.includes(ucard2.numval)) {
        if(ucard2.numval > ucard1.numval) {
        flush2  = ucard2.numval * 10 + 3;
        }
        else if(ucard2.numval < ucard1.numval) {
        flush2  = ucard1.numval * 10 + 3;
        }
        }
        if(flushhnv.includes(ucard1.numval) && !flushhnv.includes(ucard2.numval)) {
        flush2  = ucard1.numval * 10 + 3;
        }
        if(!flushhnv.includes(ucard1.numval) && flushhnv.includes(ucard2.numval)) {
        flush2  = ucard2.numval * 10 + 3;
        }
        compareflush4(flushhnv, 3, ucard1, ucard2);
        }
        else if(flushcnv.length >= 5 && (flushcnv.includes(ucard1.numval) || flushcnv.includes(ucard2.numval))){
        flc = true;
        flushcnv.sort(function(a,b){return b - a});
        flush1 = flushcnv[0] * 10 + 2;
        if(flushcnv.includes(ucard1.numval) && flushcnv.includes(ucard2.numval)) {
        if(ucard2.numval > ucard1.numval) {
        flush2  = ucard2.numval * 10 + 2;
        }
        else if(ucard2.numval < ucard1.numval) {
        flush2  = ucard1.numval * 10 + 2;
        }
        }
        if(flushcnv.includes(ucard1.numval) && !flushcnv.includes(ucard2.numval)) {
        flush2  = ucard1.numval * 10 + 2;
        }
        if(!flushcnv.includes(ucard1.numval) && flushcnv.includes(ucard2.numval)) {
        flush2  = ucard2.numval * 10 + 2;
        }
        compareflush4(flushcnv, 2, ucard1, ucard2);
        }
        else if(flushdnv.length >= 5 && (flushdnv.includes(ucard1.numval) || flushdnv.includes(ucard2.numval))){
        flc = true;
        flushdnv.sort(function(a,b){return b - a});
        flush1 = flushdnv[0] * 10 + 1;
        if(flushdnv.includes(ucard1.numval) && flushdnv.includes(ucard2.numval)) {
        if(ucard2.numval > ucard1.numval) {
        flush2  = ucard2.numval * 10 + 1;
        }
        else if(ucard2.numval < ucard1.numval) {
        flush2  = ucard1.numval * 10 + 1;
        }
        }
        if(flushdnv.includes(ucard1.numval) && !flushdnv.includes(ucard2.numval)) {
        flush2  = ucard1.numval * 10 + 1;
        }
        if(!flushdnv.includes(ucard1.numval) && flushdnv.includes(ucard2.numval)) {
        flush2  = ucard2.numval * 10 + 1;
        }
        compareflush4(flushdnv, 1, ucard1, ucard2);
        }
        }
        function compareflush4(arrayn, val, ucard1, ucard2) {
        arrayn.sort(function(a,b) {return a-b});
        var opop = 2;
  var scgf = [arrayn[opop],arrayn[opop + 1],arrayn[opop+2],arrayn[opop+3],arrayn[opop+4]];
  while(opop >= 0) {
  scgf = [arrayn[opop],arrayn[opop + 1],arrayn[opop+2],arrayn[opop+3],arrayn[opop+4]];
	if(arrayn[opop] == arrayn[opop + 1] -1 && arrayn[opop] ==  arrayn[opop + 2] -2 && arrayn[opop] ==  arrayn[opop + 3] -3 && arrayn[opop] ==  arrayn[opop + 4] -4) {
    if(scgf.includes(ucard1.numval) && scgf.includes(ucard2.numval)){
    if(ucard2.numval > ucard1.numval){
    sflush1 = arrayn[opop+4] * 10 + val;
    sflush2 = ucard2.numval * 10 + val;
    }
    else if(ucard1.numval > ucard2.numval){
    sflush1 = arrayn[opop+4] * 10 + val;
    sflush2 = ucard1.numval * 10 + val;
    }
    else if(ucard2.numval == ucard1.numval){
    sflush1 = arrayn[opop+4] * 10 + val;
    sflush2 = ucard1.numval * 10 + val;
    }
    }
    if(scgf.includes(ucard1.numval) && !scgf.includes(ucard2.numval)) {
    sflush1 = arrayn[opop+4] * 10 + val;
    sflush2 = ucard1.numval * 10 + val;
    }
    if(!scgf.includes(ucard1.numval) && scgf.includes(ucard2.numval)) {
    sflush1 = arrayn[opop+4] * 10 + val;
    sflush2 = ucard2.numval * 10 + val;
    }
    if(scgf.includes(ucard1.numval) || scgf.includes(ucard2.numval)){
    if (sflush1 != 0){
    sfc = true;
    if(sflush1/10 > 12.9 && sflush1/10 < 13.5) {
    rfc = true;
    }
    opop = -1;
    }
    
    }
    }
    opop = opop -1;
  }
        }
   
        
        function comparemultiple(userc1, userc2) {
        compmultarray = [0,0,0,0,0,0,0];
        mult1 = [0,0];
        mult2 = [0,0];
        mult3 = [0,0];
        mult4 = 0;
        mult5 = 0;
        ucardsc = 0;
        compmultarray = [card1.numval,card2.numval,card3.numval,card4.numval,card5.numval,userc1.numval, userc2.numval];
        compmultarray.sort(function(a,b){return a - b})
        for(let a1 = 0; a1 in compmultarray; a1++){
        if(compmultarray[a1] != compmultarray[a1+1]) {
        compmultarray.splice(a1,1);
        a1 = a1 - 1;
        }
        }
        var b1 = 0;
        var b2 = 1;
        var b3 = 1;
        
        for (i = 0; i in compmultarray; i++){
        b2 = 1;
        b3 = 1;

  			while(compmultarray[b1] == compmultarray[b1 + b2]) {
            b3 += 1;
            b2 += 1;
            }
            if (b1 > 0 && compmultarray[b1] == compmultarray[b1 - 1]) {
            b3 = -1;
            }
            if(b3 > 0){
            if(mult1[1] == 0) {
            mult1[0] = compmultarray[b1];
            mult1[1] = b3 +1;
            }
            else if(mult2[1] == 0) {
            mult2[0] = compmultarray[b1];
            mult2[1] = b3 +1 ;
            }
            else if(mult3[1] == 0) {
            mult3[0] = compmultarray[b1];
            mult3[1] = b3 +1;
            }
            }
                        b1 += 1;
            }
            
            
            if(compmultarray.includes(userc1.numval) || compmultarray.includes(userc2.numval)){
            if(mult3[1] == 4 && (mult3[0] == userc1.numval ||  mult3[0] == userc2.numval)){
            fkc = true;
            mult4 = mult3[0];
            mult5 = mult3[0];
            }
            else if(mult2[1] == 4 && (mult2[0] == userc1.numval || mult2[0] == userc2.numval)) {
            fkc = true;
            mult4 = mult2[0];
            mult5 = mult2[0];
            }
            else if(mult1[1] == 4 && (mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            fkc = true;
            mult4 = mult1[0];
            mult5 = mult1[0];
            }
            
            else if(mult3[1] == 3 && (mult2[1] == 3 || mult2[1] == 2) && (mult3[0] == userc1.numval || mult3[0] == userc2.numval || mult2[0] == userc1.numval || mult2[0] == userc2.numval)) {
            fhc = true;
            mult4 = mult3[0];
            mult5 = mult2[0];
            }
            else if(mult3[1] == 3 && (mult1[1] == 3 || mult1[1] == 2) && (mult3[0] == userc1.numval || mult3[0] == userc2.numval || mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            fhc = true;
            mult4 = mult3[0];
            mult5 = mult1[0];
            }
            else if(mult2[1] == 3 && mult3[1] == 2 && (mult3[0] == userc1.numval || mult3[0] == userc2.numval || mult2[0] == userc1.numval || mult2[0] == userc2.numval)) {
            fhc = true;
            mult4 = mult2[0];
            mult5 = mult3[0];
            }
            else if(mult2[1] == 3 && (mult1[1] == 3 || mult1[1] == 2) && (mult2[0] == userc1.numval || mult2[0] == userc2.numval || mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            fhc = true;
            mult4 = mult2[0];
            mult5 = mult1[0];
            }
            else if(mult1[1] == 3 && (mult3[1] == 3 || mult3[1] == 2) && (mult3[0] == userc1.numval || mult3[0] == userc2.numval || mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            fhc = true;
            mult4 = mult1[0];
            mult5 = mult3[0];
            }
            else if(mult1[1] == 3 && (mult2[1] == 3 || mult2[1] == 2) && (mult2[0] == userc1.numval || mult2[0] == userc2.numval || mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            fhc = true;
            mult4 = mult1[0];
            mult5 = mult2[0];
            }
            
            else if(mult3[1] == 3 && (mult3[0] == userc1.numval || mult3[0] == userc2.numval)) {
            tkc = true;
            mult4 = mult3[0];
            mult5 = mult3[0];
            }
            else if(mult2[1] == 3 && (mult2[0] == userc1.numval || mult2[0] == userc2.numval)) {
            tkc = true;
            mult4 = mult2[0];
            mult5 = mult2[0];
            }
            else if(mult1[1] == 3 && (mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            tkc = true;
            mult4 = mult1[0];
            mult5 = mult1[0];
            }
           
            else if(mult3[1] == 2 && (mult3[0] == userc1.numval || mult3[0] == userc2.numval)) {
            opc = true;
            mult4 = mult3[0];
            mult5 = mult3[0];
            if (mult2[1] == 2) {
            tpc = true;
            mult5 = mult2[0];
            }
            else if (mult1[1] == 2) {
            tpc = true;
            mult5 = mult1[0];
            }
            }
            else if(mult2[1] == 2 && (mult2[0] == userc1.numval || mult2[0] == userc2.numval)) {
            opc = true;
            mult4 = mult2[0];
            mult5 = mult2[0];
            if (mult3[1] == 2) {
            tpc = true;
            mult5 = mult3[0];
            }
            else if (mult1[1] == 2) {
            tpc = true;
            mult5 = mult1[0];
            }
            }
            else if(mult1[1] == 2 && (mult1[0] == userc1.numval || mult1[0] == userc2.numval)) {
            opc = true;
            mult4 = mult1[0];
            mult5 = mult1[0];
            if (mult3[1] == 2) {
            tpc = true;
            mult5 = mult3[0];
            }
            else if (mult2[1] == 2) {
            tpc = true;
            mult5 = mult2[0];
            }
            }
            }
            if(tpc == true) {
            if(mult5 > mult4) {
            mult4, mult5 = mult5, mult4;
            }
            }
        }
        function maxchecka1(ccard, ucard1, ucard2) {
        maxcval2 = 0;
        maxcsym2 = "";
        maxcval21 = 0;
        maxcval22 = 0;
        maxcval25 = [0,0];
        var maxcvalc2 = 0;
        maxchecka2(ccard, ucard1);
        maxchecka2(ccard, ucard2);
        maxchecka3();
        maxchecka4(ucard1);
        maxchecka4(ucard2);
        }
        function maxchecka2(ccard1, ccard2) {
        if(ccard1 == ccard2.numval) {
        if(maxcval21 == 0) {
        maxcval21 = ccard2.value;
        }
        else if(maxcval22 == 0) {
        maxcval22 = ccard2.value;
        }
        }
        }
        function maxchecka3() {
        maxcval25 = [maxcval21, maxcval22];
        maxcval25.sort(function(a,b) {a-b});
        maxcvalc2 = maxcval25[0];
        }
        function maxchecka4(ccard) {
        if(maxcvalc2 == ccard.value) {
        maxcsym2 = ccard.symbol;
        maxcval2 = ccard.numval;
        }
        }
        function maxcheck(ccard, ucard1, ucard2) {
        maxcval = 0;
        maxcsym = "";
        maxcval1 = 0;
        maxcval2 = 0;
        maxcval3 = 0;
        maxcval4 = 0;
        maxcval5 = [0,0,0,0];
        var maxcvalc = 0;
        maxcheck2(ccard, card1);
        maxcheck2(ccard, card2);
        maxcheck2(ccard, card3);
        maxcheck2(ccard, card4);
        maxcheck2(ccard, card5);
        maxcheck2(ccard, ucard1);
        maxcheck2(ccard, ucard2);
        maxcheck3();
        maxcheck4(card1);
        maxcheck4(card2);
        maxcheck4(card3);
        maxcheck4(card4);
        maxcheck4(card5);
        maxcheck4(ucard1);
        maxcheck4(ucard2);
        }
        function maxcheck2(ccard1, ccard2) {
        if(ccard1 == ccard2.numval) {
        if(maxcval1 == 0) {
        maxcval1 = ccard2.value
        }
        else if(maxcval2 == 0) {
        maxcval2 = ccard2.value
        }
        else if(maxcval3 == 0) {
        maxcval3 = ccard2.value
        }
        else if(maxcval4 == 0) {
        maxcval4 = ccard2.value
        }
        }
        }
        function maxcheck3() {
        maxcval5 = [maxcval1,maxcval2,maxcval3,maxcval4];
        maxcval5.sort(function(a,b) {return b-a});
        maxcvalc = maxcval5[0];
        }
        function maxcheck4(ccard) {
        if(maxcvalc == ccard.value) {
        maxcsym = ccard.symbol;
        maxcval = ccard.numval;
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
        function addition(card,sym) {
        addition1 = 0;
        var symval = 0;
        if(sym == "spade") {
        symval = 4;
        }
        else if(sym == "heart") {
        symval = 3;
        }
        else if(sym == "clover") {
        symval = 2;
        }
        else if(sym == "diamond") {
        symval = 1;
        }
        addition1 = card*10 + symval;
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
  add1 = 0;
  add2 = 0;
  add3 = 0;
  add4 = 0;
  mult4 = 0;
  mult5 = 0;
  rfc = false;
  sfc = false;
  fkc = false;
  fhc = false;
  flc = false;
  stc = false;
  tkc = false;
  tpc = false;
  opc = false;
  addition1 = 0;
  flushsnv = [];
  flushhnv = [];
  flushcnv = [];
  flushdnv = [];
  flush1 = 0;
  flush2 = 0;
  sflush1 = 0;
  sflush2 = 0;
  stret1 = 0;
  stret2 = 0;
  for(i = 0; i in straightcheck; i++) {
  if (straightcheck[osd] == straightcheck[osd+1]) {
  straightcheck.splice(osd,1);
  }
  osd++
  }

 var opop = 2;
 var scg = [straightcheck[opop],straightcheck[opop + 1],straightcheck[opop+2],straightcheck[opop+3],straightcheck[opop+4]];
  while(opop >= 0) {
  scg = [straightcheck[opop],straightcheck[opop + 1],straightcheck[opop+2],straightcheck[opop+3],straightcheck[opop+4]];
	if(straightcheck[opop] == straightcheck[opop + 1] -1 && straightcheck[opop] ==  straightcheck[opop + 2] -2 && straightcheck[opop] ==  straightcheck[opop + 3] -3 && straightcheck[opop] ==  straightcheck[opop + 4] -4) {
    if(scg.includes(ucard1.numval) && scg.includes(ucard2.numval)){
    if(ucard2.numval > ucard1.numval){
    stret1 = straightcheck[opop+4];
    stret2 = ucard2.numval
    }
    else if(ucard1.numval > ucard2.numval){
    stret1 = straightcheck[opop+4];
    stret2 = ucard1.numval
    }
    else if(ucard2.numval == ucard1.numval){
    stret1 = straightcheck[opop+4];
    stret2 = ucard1.numval
    }
    }
    if(scg.includes(ucard1.numval) && !scg.includes(ucard2.numval)) {
    stret1 = straightcheck[opop+4];
    stret2 = ucard1.numval
    }
    if(!scg.includes(ucard1.numval) && scg.includes(ucard2.numval)) {
    stret1 = straightcheck[opop+4];
    stret2 = ucard2.numval
    }
    if(scg.includes(ucard1.numval) || scg.includes(ucard2.numval)){
    if (stret1 != 0){
    stc = true;
    opop = -1;
    }
    }
    }
    opop = opop -1;
  }
  //make sure check ucard1 or ucard2 >
  comparemultiple(ucard1, ucard2);
  compareflush(ucard1,ucard2);
  //score = combo(100),c1,c2,c3,c4(100)(450.071.132.063.041)
  if(rfc == true) {
  currentplayer =  450 * 1000000000000 + sflush1 * 1000000000 + sflush2 *1000000 + add3 * 1000 + add4;
  }
  else if(sfc == true) {
  currentplayer =  400 * 1000000000000 + sflush1 * 1000000000 + sflush2 *1000000 + add3 * 1000 + add4;
  }
  else if(fkc == true) {maxcheck(mult4, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add1 = addition1;
    
    maxchecka1(mult5, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add2= addition1;
    currentplayer =  350* 1000000000000 + add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else if(fhc == true) {
    maxcheck(mult4, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add1 = addition1;
    maxcheck(mult5, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add2 = addition1;
    maxchecka1(mult4, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add3 = addition1;
    maxchecka1(mult5, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add4 = addition1;
    currentplayer =  300* 1000000000000 + add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else if(flc == true) {
  currentplayer =  250 * 1000000000000 + flush1 * 1000000000 + flush2 *1000000 + add3 * 1000 + add4;
  }
  else if(stc == true) {
  
   maxcheck(mult4, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add1 = addition1;
    
    maxchecka1(mult5, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add2= addition1;
    currentplayer =  200* 1000000000000 + add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else if(tkc == true) {maxcheck(mult4, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add1 = addition1;
    
    maxchecka1(mult5, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add2= addition1;
    currentplayer =  150* 1000000000000 + add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else if(tpc == true) {
    maxcheck(mult4, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add1 = addition1;
    maxcheck(mult5, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add2 = addition1;
    maxchecka1(mult4, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add3 = addition1;
    maxchecka1(mult5, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add4 = addition1;
    currentplayer =  100* 1000000000000 + add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else if(opc == true) {
  maxcheck(mult4, ucard1, ucard2);
    addition(maxcval, maxcsym);
    add1 = addition1;
    
    maxchecka1(mult5, ucard1, ucard2);
    addition(maxcval2, maxcsym2);
    add2= addition1;
    currentplayer =  50* 1000000000000 + add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else {
  addition(ucard1.numval, ucard1.symbol);
  add1 = addition1;
  addition(ucard2.numval, ucard2.symbol);
  add2 = addition1;
  if (add1 > add2){
    currentplayer = add1 * 1000000000 + add2 *1000000 + add3 * 1000 + add4;
  }
  else if(add2 > add1) {
    currentplayer = add2 * 1000000000 + add1 *1000000 + add3 * 1000 + add4;
  }
  }
  }

function starter() {
  sorter(p1card1, p1card2, player.p1);
  document.write("player 1  <br><br>");
  sorter(p2card1, p2card2, player.p2);
  document.write("player 2  <br><br>");
  sorter(p3card1, p3card2, player.p3);
  document.write("player 3  <br><br>");
  winner();
}
async function winner () {
	var wiener = [player.p1, player.p2, player.p3];
    wiener.sort(function(a,b) {return b - a});
    if(wiener[0] == player1.p1) {
        if (botData.Player1State == true && botData.Player1FoldConfirm == false) {
            message.channel.send(p1user.username + " is the winner.");
            message.channel.send("Use ?endp to collect rewards");
            try {
                await profileModel.findOneAndUpdate({
                    userID: botID,
                }, 
                {
                    $set : {
                    poker1winner: "p1",
                    },
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
    if(wiener[0] == player1.p2) {
        if (botData.Player2State == true && botData.Player2FoldConfirm == false) {
            message.channel.send(p2user.username + " is the winner.");
            message.channel.send("Use ?endp to collect rewards");
            try {
                await profileModel.findOneAndUpdate({
                    userID: botID,
                }, 
                {
                    $set : {
                    poker1winner: "p2",
                    },
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
    if(wiener[0] == player1.p3) {
        if (botData.Player3State == true && botData.Player3FoldConfirm == false) {
            message.channel.send(p3user.username + " is the winner.");
            message.channel.send("Use ?endp to collect rewards");
            try {
                await profileModel.findOneAndUpdate({
                    userID: botID,
                }, 
                {
                    $set : {
                    poker1winner: "p3",
                    },
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
}
        // async function EndRoundTake() {
        //     try {
        //         if (botData.Player1State == true && botData.Player1FoldConfirm == false) {
        //             await profileModel.findOneAndUpdate({
        //                 userID: botData.player1,
        //             }, 
        //             {
        //                 $inc : {
        //                 dollar: -amount,
        //                 },
        //             })
        //         }
        //         if (botData.Player2State == true && botData.Player2FoldConfirm == false) {
        //             await profileModel.findOneAndUpdate({
        //                 userID: botData.player2,
        //             }, 
        //             {
        //                 $inc : {
        //                 dollar: -amount,
        //                 },
        //             })
        //         }
        //         if (botData.Player3State == true && botData.Player3FoldConfirm == false) {
        //             await profileModel.findOneAndUpdate({
        //                 userID: botData.player3,
        //             }, 
        //             {
        //                 $inc : {
        //                 dollar: -amount,
        //                 },
        //             })
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        function currentuser() {
            try {
            if(p1turnlocal == true) {
                message.channel.send("It is now " + p1user.username + "'s turn")
            }
            if(p2turnlocal == true) {
                message.channel.send("It is now " + p2user.username + "'s turn")
            }
            if(p3turnlocal == true) {
                message.channel.send("It is now " + p3user.username + "'s turn")
            }
        } catch (error) {
            console.log(error);
        }
        } 
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        if (botData.GameState != 1) return message.channel.send("Game has not started.");
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
        const mooney = profileData.dollar; 
        if(mooney <= amount) {
            message.channel.send('Not sufficient funds.');
            return;
        }
        try {
            var p1user = client.users.cache.get(botData.player1);
            var p2user = client.users.cache.get(botData.player2);
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
                    Player1State: false,
                    Player1FoldConfirm : true,
                    p1continue : true,
                    },
                })
                p1continuelocal = true;
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
                    Player2State: false,
                    Player2FoldConfirm : true,
                    p2continue : true,
                    },
                })
                p2continuelocal = true;
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
                    Player3State: false,
                    Player3FoldConfirm : true,
                    p3continue : true,
                    },
                })
                p3continuelocal = true;
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
                        // EndRoundTake();
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $inc : {
                            TotalBet: amount * PlayerAmountLocal,
                            BetStage: 1,
                            },
                            $set : {
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
                        if(botData.BetStage == 1) {
                            callcard4();
                        }
                        if(botData.BetStage == 2) {
                            callcard5();
                        }
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
                        // EndRoundTake();
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $inc : {
                            TotalBet: amount * PlayerAmountLocal,
                            BetStage: 1,
                            },
                            $set : {
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
                        if(botData.BetStage == 1) {
                            callcard4();
                        }
                        if(botData.BetStage == 2) {
                            callcard5();
                        }
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
                        // EndRoundTake();
                        await profileModel.findOneAndUpdate({
                            userID: botID,
                        }, 
                        {
                            $inc : {
                            TotalBet: amount * PlayerAmountLocal,
                            BetStage: 1,
                            },
                            $set : {
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
                        if(botData.BetStage == 1) {
                            callcard4();
                        }
                        if(botData.BetStage == 2) {
                            callcard5();
                        }
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
        if (botData.BetStage > 3) {
            return message.channel.send("Game has ended, use ?endp to claim rewards.")
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player1,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p1nowbetlocal),
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player1,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p1nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = true;
                                    p3turnlocal = false;
                                    p1continuelocal = true;
                                    p1nowbetlocal = nowbetlocal;
                                    if (amount == p2nowbetlocal && p2nowbetlocal == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player2,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p2nowbetlocal),
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player2,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p2nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = false;
                                    p3turnlocal = true;
                                    p2nowbetlocal = nowbetlocal;
                                    p2continuelocal = true;
                                    if (p1nowbetlocal == amount && amount == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player3,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p3nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3continuelocal = true;
                                    p3nowbetlocal = nowbetlocal;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player3,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p3nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3nowbetlocal = nowbetlocal;
                                    p3continuelocal =  true;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        console.log("p3end");
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
        if (botData.BetStage == 2) {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player1,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p1nowbetlocal),
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player1,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p1nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = true;
                                    p3turnlocal = false;
                                    p1continuelocal = true;
                                    p1nowbetlocal = nowbetlocal;
                                    if (amount == p2nowbetlocal && p2nowbetlocal == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                        callcard5();
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player2,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p2nowbetlocal),
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player2,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p2nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = false;
                                    p3turnlocal = true;
                                    p2nowbetlocal = nowbetlocal;
                                    p2continuelocal = true;
                                    if (p1nowbetlocal == amount && amount == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                        callcard5();
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player3,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p3nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3continuelocal = true;
                                    p3nowbetlocal = nowbetlocal;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player3,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p3nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3nowbetlocal = nowbetlocal;
                                    p3continuelocal =  true;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        console.log("p3end");
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                        callcard5();
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
        if (botData.BetStage == 3) {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player1,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p1nowbetlocal),
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player1,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p1nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = true;
                                    p3turnlocal = false;
                                    p1continuelocal = true;
                                    p1nowbetlocal = nowbetlocal;
                                    if (amount == p2nowbetlocal && p2nowbetlocal == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                        return starter();
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player2,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p2nowbetlocal),
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player2,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p2nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = false;
                                    p2turnlocal = false;
                                    p3turnlocal = true;
                                    p2nowbetlocal = nowbetlocal;
                                    p2continuelocal = true;
                                    if (p1nowbetlocal == amount && amount == p3nowbetlocal && p3nowbetlocal == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                        return starter();
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player3,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p3nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3continuelocal = true;
                                    p3nowbetlocal = nowbetlocal;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                    await profileModel.findOneAndUpdate({
                                        userID: botData.player3,
                                    }, 
                                    {
                                        $inc : {
                                        dollar: -(amount - p3nowbetlocal),
                                        },
                                    })
                                    p1turnlocal = true;
                                    p2turnlocal = false;
                                    p3turnlocal = false;
                                    p3nowbetlocal = nowbetlocal;
                                    p3continuelocal =  true;
                                    if (p1nowbetlocal == p2nowbetlocal && p2nowbetlocal == amount && amount == botData.NowBet && p1continuelocal == true && p2continuelocal == true && p3continuelocal == true) {
                                        console.log("p3end");
                                        // EndRoundTake();
                                        await profileModel.findOneAndUpdate({
                                            userID: botID,
                                        }, 
                                        {
                                            $inc : {
                                            TotalBet: amount * PlayerAmountLocal,
                                            BetStage: 1,
                                            },
                                            $set : {
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
                                        return starter();
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