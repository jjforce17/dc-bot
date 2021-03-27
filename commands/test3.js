module.exports = {
    name: 'testg3',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        try {
            const target = message.mentions.users.first();
            if(!target) return;
            const filter1 = r1 => r1.author.id === message.author.id;
                message.channel.awaitMessages(filter1, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                 })
                 .then((collected) => {
                    message.channel.send('collected');
                    var c1 = collected[1];
                    message.channel.send(c1);
                })
                .catch(collected => {
                    message.channel.send('Timed out');
                });
        } catch (err) {
            console.log(err);
            }
        }
    }
