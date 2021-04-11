const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg6',
    description: "test6",
    async execute(client, message, args, Discord) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        try {
            let filter = m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                 })
                .then(collected => {
                    message = message.first()
                    if (message.content.toUpperCase() == 'Y') {
                            message.channel.send("test");
                    if (message.content.toUpperCase() == 'N') {
                            message.channel.send("testn");
                    }
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