const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'poker1',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(message.member.roles.cache.some(r => r.name === "Poker1")) return;
        var rolea = message.guild.roles.cache.find(r => r.name === "Poker1");
        var mRole = message.guild.roles.cache.get(rolea.id).members;
        if(mRole.size == 3) return message.channel.send("There are already 3 players, please wait until one or more player leaves the room");
        message.member.roles.add(rolea).catch(console.error);
    }
}