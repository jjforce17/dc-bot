module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
            let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'boi');
            member.roles.add(welcomeRole);
    }
}