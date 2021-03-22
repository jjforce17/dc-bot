module.exports = {
    name: 'testg3',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if (!args.length) return;
        const amount  = args[1];
        const target = message.mentions.users.first();
        if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        if(!target) return;
        try {
            let filter = m => m.author.id === message.author.id
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 3,
                    time: 20000,
                    errors: ['time']
                 })
                .then(async (message) => {
                    if (message.content.toUpperCase() == 'Y') {
                    message.channel.send('Y');
                    } else if (message.content.toUpperCase() == 'N') {
                    message.channel.send('N');
                    } else if (message.content.toUpperCase() == 'Z') {
                    message.channel.send('Z');
                    } else if (message.content.toUpperCase() == 'V') {
                    message.channel.send('V');
                    return;
                    } else {
                    message.channel.send('Invalid response');
                    return;
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
