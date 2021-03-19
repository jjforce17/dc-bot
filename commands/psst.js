const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'psst',
    description: "psst",
    async execute(client, message, args, Discord, profileData) {
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