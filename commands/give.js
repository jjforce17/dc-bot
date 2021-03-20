const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'give',
    description: "normal give",
    async execute(client, message, args, Discord) {
        if (message.member.roles.cache.has("803841418589110303")){
        if (!args.length) return;
        const amount  = args[1];
        const target = message.mentions.users.first();
        if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        if(!target) return;
        try {
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
            message.channel.send("given" + target.username + amount);
            await profileModel.findOneAndUpdate({
                userID: target.id,
            }, 
            {
                $inc : {
                    dollar: amount,
                },
            }
        );
        } catch (err) {
            console.log(err);
            }
        }
        else {
            return message.channel.send("error");
        }
    }
}