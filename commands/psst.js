const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'psst',
    description: "psst",
    async execute(client, message, args, Discord, profileData) {
        message.channel.send(`Your balance is ${profileData.dollar}.`);
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