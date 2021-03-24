const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg5',
    description: "testg5",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, 
        {
            $addFields : {
                BCard1 : 0,
                BCard2 : 0,
                BCard3 : 0,
                BCard4 : 0,
                BCard5 : 0,
                player1 : "",
                player2 : "",
                player3 : "",
            },
        }
    );
    }
}

