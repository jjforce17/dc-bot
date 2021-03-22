module.exports = {
    name: 'testg3',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        try {
            let filter = m => m.author.id === message.author.id
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 3,
                    time: 20000,
                    errors: ['time']
                 })
                 .then(collected => console.log(collected.size))
                 .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
            })
            
        } catch (err) {
            console.log(err);
            }
        }
    }
