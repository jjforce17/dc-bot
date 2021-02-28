const Discord = require('discord.js');
const bot = new Discord.Client();


var ganggu = 0;

bot.on('ready', () =>{
    console.log("nomo");
})
bot.on('message', msg =>{
    if(msg.content === "bgn")
    {
        msg.reply('おはよ');
    }

    if(msg.content === "$wa")
    {
        ganggu = Math.floor(Math.random() * 15) + 1;
        if(ganggu <= 2)
        {
            msg.channel.send('ganggu dlu wkwkkww');
            msg.channel.send('ganggu dlu wkwkkwkw');
        }
        else if(ganggu <=3)
        {
            msg.channel.send('ganggu dlu wkwkkww');
            msg.channel.send('ganggu dlu wkwkkwkw');
            msg.channel.send('ganggu dlu wkwkkww');
            msg.channel.send('ganggu dlu wkwkkwkw');
        }
        else
        {

        }
    }
    let args = msg.content.substring(prefix.length).split("  ");
    switch(args[0]){
        case" homo" :
            msg.channel.send('$wa');
        break;
    }
})


bot.login(process.env.token);