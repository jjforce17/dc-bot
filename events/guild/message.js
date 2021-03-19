const profileModel = require('../../models/profileSchema');

module.exports = async(Discord, client, message) => {
    const prefix = '?';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try{
        profileData = await profileModel.findOne({ userID: message.author.id});
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

    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const command = client.commands.get(cmd);
        
        if(command) {
            command.execute(client, message, args, Discord, profileData);
        }
    }
}