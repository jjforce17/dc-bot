const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'give',
    description: "normal give",
    async execute(client, message, args, Discord) {
        if (!args.length) return;
        const amount  = args[1];
        const target = message.mentions.users.first();
        if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        if(!target) return;
        try {
            let filter = m => m.author.id === message.author.id
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10,
                    errors: ['time']
                 })
                .then(message => {
                    message = message.first()
                    if (message.content.toUpperCase() == 'Y') {
                        message.channel.send('Invalid response');
                    } else if (message.content.toUpperCase() == 'N') {
                    message.channel.send('Cancelled');
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