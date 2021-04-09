
const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'clear',
    description: "clear",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        try {
            message.delete();
            message.channel.bulkDelete(99);  
        } catch (error) {
           console.log(error); 
        }
    }
}