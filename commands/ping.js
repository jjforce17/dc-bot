module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
        let welcomeRole = message.guild.roles.cache.find(role => role.name === 'boi');
        let member = message.member;
        member.roles.add(welcomeRole);
    }
}