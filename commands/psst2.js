const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'psst2',
    description: "psst2",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, 
        {
            $set : {
                dollar: 100,
            },
        }
    );
    }
}