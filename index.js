const Discord = require('discord.js');
const bot = new Discord.Client();
const mongoose = require("mongoose");

var ganggu = 0;

bot.on('message', msg=>{
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
mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(()=>{
    console.log("Connected to the database!");
}).catch(()=>{
    console.log(err);
});

bot.login(process.env.TOKEN);