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
                 .then(async (message) => {
                    if (message.content.toUpperCase() == 'Y') {
                    message.channel.send('Y');
                    console.log("y");
                    } else if (message.content.toUpperCase() == 'N') {
                    message.channel.send('N');
                    console.log("n");
                    } else if (message.content.toUpperCase() == 'Z') {
                    message.channel.send('Z');
                    console.log("z");
                    } else if (message.content.toUpperCase() == 'V') {
                    message.channel.send('V');
                    console.log("v");
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
