const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg4',
    description: "test4",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        client.users.cache.get(profileData.userID).send('test4');
        }
    }