const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'betp',
    description: "bet Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        botData = await profileModel.findOne({ userID: botID });
        if(botData.NowTurn == 1 ) {

        }
    }
}