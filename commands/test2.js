module.exports = {
    name: 'testg2',
    permission : ["ADMINISTRATOR"],
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        const mooney = profileData.dollar 
        if(mooney <= 0) {
            message.channel.send('dasar miskin');
        }
    }
}