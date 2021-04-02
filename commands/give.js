const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'give',
    description: "normal give",
    async execute(client, message, args, Discord) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if (!args.length) return;
        const amount  = args[1];
        const target = message.mentions.users.first();
        const targetData = await profileModel.findOne({ userID: target.id});
        if(!target) return message.channel.send("User doesn't exist");
        if (!targetData) return message.channel.send("user doesn't have an account");
        if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        try {
            let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                 })
                .then(async (message) => {
                    message = message.first()
                    if (message.content.toUpperCase() == 'Y') {
                        const targetData = await profileModel.findOne({userID: target.id});
                            if (!targetData) return;
                            await profileModel.findOneAndUpdate({
                                userID: message.author.id,
                            }, 
                            {
                                $inc : {
                                dollar: -amount,
                                },
                            }
                            );
                            await profileModel.findOneAndUpdate({
                                userID: target.id,
                            }, 
                            {
                                $inc : {
                                dollar: amount,
                                },
                            }
                            );
                            message.channel.send("Given " + target.username + " " + amount);
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