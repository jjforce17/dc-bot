const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg10',
    description: "test10",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        if (botData.player1 == "000") return message.channel.send("User not found");
        function currentuser() {
            try {
            if(p1turnlocal = true) {
                message.channel.send("It is now " + p1user.username + "'s turn")
            }
            if(p2turnlocal = true) {
                message.channel.send("It is now " + p2user.username + "'s turn")
            }
            if(p3turnlocal = true) {
                message.channel.send("It is now " + p3user.username + "'s turn")
            }
        } catch (error) {
            console.log(error);
        }
        }
        try {
            const user1 = client.users.cache.get(botData.player1);
            message.channel.send(user1.username);
        } catch (error) {
            console.log(error);
        }
    }
}