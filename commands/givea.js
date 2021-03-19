const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'givea',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "admin give",
    async execute(client, message, args, Discord) {
        if (message.member.roles.cache.some(role => role.name === 'Nig Boi')) return message.channel.send("error");
        if (!args.length) return;
        const amount  = args[1];
        const target = message.mentions.users.first();
        if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        if(!target) return;
        try {
            const targetData = await profileModel.findOne({userID: target.id});
            if (!targetData) return;
            message.channel.send("given" + amount);
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
}