const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg10',
    description: "test10",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        if (botData.player1 == "000") return message.channel.send("User not found");
        try {
            const user1 = client.users.cache.get(botData.player1);
        } catch (error) {
            console.log(error);
        }
    }
}