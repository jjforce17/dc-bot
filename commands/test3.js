module.exports = {
    name: 'testg3',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        try {
            const filter1 = r1 => r1.author.id === message.author.id;
                message.channel.awaitMessages(filter1, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                 })
                 .then(collected => {
                    console.log(collected.content());
                    var c1 = collected[1];
                    console.log(c1);
                })
                .catch(collected => {
                    message.channel.send('Timed out');
                });
        } catch (err) {
            console.log(err);
            }
        }
    }
