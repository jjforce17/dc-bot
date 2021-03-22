module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
        let welcomeRole = message.member.roles.cache.find(r => r.name === "boi");
        message.channel.send(welcomeRole);
        if(!message.member.roles.cache.find(r => r.name === "boi")){
            message.channel.send("test");
        }
        message.member.roles.add(welcomeRole).catch(console.error);
    }
}