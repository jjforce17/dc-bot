module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
        let rolea = message.member.roles.cache.find(r => r.name === "boi");
        message.member.roles.add("807571090905759754").catch(console.error);
    }
}