const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg4',
    description: "test4",
    async execute(client, message, args, Discord, profileData) {
        const botID = "803868333341802499"
        try{
            profileData = await profileModel.findOne({ userID: botID});
            if(!profileData){
                let profile = await profileModel.create({
                    userID: botID,
                    serverID: message.guild.id,
                    BCard1 = 0,
                    BCard2 = 0,
                    BCard3 = 0,
                    BCard4 = 0,
                    BCard5 = 0,
                    Player1 = "",
                    player2 = "",
                    player3 = "",
                    });
                profile.save();
            }
        }catch(err){
            console.log(err)
        }
    }
}