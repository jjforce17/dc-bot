module.exports = {
    name: 'testg',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const mooney = profileData.dollar 
        if(mooney <= 0) {
            message.channel.send('dasar miskin');
        }
    }
}