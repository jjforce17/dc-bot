module.exports = {
    name: 'testg3',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        try {
            const filter1 = r1 => r1.author.id === message.author.id
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter1, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                 })
                 .then((collected1) => {
                    const r1 = collected1.first()
                    if (r1.content.toUpperCase() == 'Y') {
                    message.channel.send('Y');
                    
                    } 
                    else if (r1.content.toUpperCase() == 'N') {
                    message.channel.send('N');
                
                    } else {
                    message.channel.send('Invalid response');
                    }
                })
                .catch(collected => {
                    message.channel.send('Timed out');
                });
            })
            const filter2 = r2 => r2.author.id === message.author.id
                message.channel.send("Press Y to confirm, N to cancel").then(() => {
                message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                 })
                 .then((collected2) => {
                    const r2 = collected2.first()
                    if (r2.content.toUpperCase() == 'Z') {
                    message.channel.send('Z');
                    } 
                    else if (r2.content.toUpperCase() == 'V') {
                    message.channel.send('V'); 
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
