const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'psst',
    description: "psst",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.channel.cache.find(c => c.name === "psst")) return console.log("rc");
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, 
        {
            $inc : {
                dollar: 1,
            },
            
        }
    );
    }
}