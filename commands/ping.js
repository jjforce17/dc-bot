module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
        let welcomeRole = message.member.roles.cache.find(role => role.name === "boi");
        message.member.roles.add(welcomeRole);
    }
}