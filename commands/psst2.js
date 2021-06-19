const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'psst333',
    description: "psst333",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        await profileModel.findOneAndUpdate({
            userID: botID,
        }, 
        {
            $inc : {
            dollar: -(amount - p1nowbetlocal),
            },
            $set : {
            NowBet : amount,
            Player1NowBet : amount,
            Player1Turn: false,
            Player2Turn: true,
            Player3Turn: false,
            NowBetSet: true,
            p1continue: true,
            },
        })
    }
}