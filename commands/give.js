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
        const user = message.author.id;
        try {
            const targetData = await profileModel.findOne({userID: target.id});
            if (!targetData) return;
            if (message.author.id = user) {
                if (message.content == y){
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
            message.channel.send("given" + target.username + amount);
        }
            }
        } catch (err) {
            console.log(err);
            }
    }
}