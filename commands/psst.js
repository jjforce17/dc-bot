const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'psst',
    description: "psst",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.channel.name === "psst") return console.log("not rc");
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