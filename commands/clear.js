
const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'clear',
    description: "clear",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        message.delete();
        const fetched = await message.channel.fetchMessages({limit: 99});
        message.channel.bulkDelete(fetched);  
    }
}