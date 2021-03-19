const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        dollar: 300,
        bank: 0,
    });
    profile.save();
};