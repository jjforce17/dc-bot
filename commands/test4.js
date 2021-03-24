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
                    userID: message.author.id,
                    serverID: message.guild.id,
                    dollar: 300,
                    bank: 0,
                });
                profile.save();
            }
        }catch(err){
            console.log(err)
        }
    }
}