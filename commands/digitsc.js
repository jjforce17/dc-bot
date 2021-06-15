const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'digitsc',
    description: "this is the ping command!",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(message.member.roles.cache.some(r => r.name === "horni boi")) return message.channel.send("You are already have this.");
        if(message.channel.name != "shop") return;
        var rolea = message.guild.roles.cache.find(r => r.name === "horni boi");
        const mooney = profileData.dollar 
        if(mooney <= 1001) {
            message.channel.send('Not sufficient funds.');
            return;
        }
        await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, 
        {
            $inc : {
                dollar: -1000,
            },
            
        }
    );
    message.member.roles.add(rolea).catch(console.error);
    }
}