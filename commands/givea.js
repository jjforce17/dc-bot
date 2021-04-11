const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'givea',
    description: "admin give",
    async execute(client, message, args, Discord) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return message.channel.send("Admin Command");
        if (!args.length) return;
        const amount  = args[1];
        const target = message.mentions.users.first();
        const targetData = await profileModel.findOne({ userID: target.id});
        if(!target) return message.channel.send("User doesn't exist");
        if (!targetData) return message.channel.send("user doesn't have an account");
        if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        try {
            const targetData = await profileModel.findOne({userID: target.id});
            if (!targetData) return;
            await profileModel.findOneAndUpdate({
                userID: target.id,
            }, 
            {
                $inc : {
                    dollar: amount,
                },
            })
            message.channel.send("given " + amount);
        } catch (err) {
            console.log(err);
            }
    }
}