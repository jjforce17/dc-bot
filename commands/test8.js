const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg8',
    description: "test8",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, 
        {
            $inc : {
                dollar: 1,
            },
        }
    );
    message.channel.send(profileData.dollar);
    }
}