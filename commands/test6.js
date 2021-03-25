const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg5',
    description: "testg5",
    async execute(client, message, args, Discord, profileData) {
        const user = args[0];
        const fuser = message.guild.members.get(user.id);
        message.channel.send(fuser);
    }
}

