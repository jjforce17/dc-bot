const { MessageCollector } = require("discord.js");

module.exports = {
    name: 'testg3',
    description: "this is the ping command!",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        try {
            const filter1 = r1 => r1.author.id === message.author.id;
                const collector = new MessageCollector (message.channel, filter1, {
                    time : 5000
                })
                collector.on("collect", (msg) => {
                    console.log(msg.content);
                })
                collector.on("end", (collected) => {
                    console.log(collected.size);
                })
        } catch (err) {
            console.log(err);
            }
        }
    }
