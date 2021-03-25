const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg6',
    description: "testg6",
    async execute(client, message, args, Discord, profileData) {
        const user = args[0];
        const fuser = message.guild.members.get(user.id);
        message.channel.send(fuser);
    }
}

