const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg6',
    description: "test6",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        const botID = "803868333341802499";
        const response = await profileModel.findOneAndUpdate({
            userID: botID,
        }, 
        {
            $set : {
                Bcard1: 0,
            },
        }
    );
    }
}