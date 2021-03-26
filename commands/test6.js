const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg6',
    description: "test6",
    async execute(client, message, args, Discord) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        try {
            let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y";
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                 })
                .then(async (message) => {
                    message = message.first()
                    if (message.content.toUpperCase() == 'Y') {
                            message.channel.send("test");
                    } else {
                    message.channel.send('Invalid response');
                    }
                    })
                   .catch(collected => {
                        message.channel.send('Timed out');
                    });
            })
            
        } catch (err) {
            console.log(err);
            }
    }
}