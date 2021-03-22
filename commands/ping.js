module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
        let rolea = message.member.roles.cache.some(r => r.name === "boi");
        message.member.roles.add(rolea).catch(console.error);
    }
}