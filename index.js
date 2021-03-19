const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client();
const mongoose = require("mongoose");

var ganggu = 0;
    
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.mongodbsrv, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {
    console.log('Connected to the database!');
})
.catch((err) => {
    console.log(err);
})

client.on('message', message =>{
    if(message.content === "$wa")
    {
        ganggu = Math.floor(Math.random() * 15) + 1;
        if(ganggu <= 4)
        {
            message.channel.send('ganggu dlu wkwkkww');
            message.channel.send('ganggu dlu wkwkkwkw');
        }
        else if(ganggu <= 5)
        {
            message.channel.send('ganggu dlu wkwkkww');
            message.channel.send('ganggu dlu wkwkkwkw');
            message.channel.send('ganggu dlu wkwkkww');
            message.channel.send('ganggu dlu wkwkkwkw');
        }
    }
})

client.login(process.env.token);