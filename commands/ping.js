module.exports = {
    name: 'ping',
    description: "this is the ping command!",
    execute(client, message, args, Discord) {
        message.channel.send('pong');
        let welcomeRole = message.member.roles.cache.find(r => r.name === "boi");
        if(!message.member.roles.cache.find(r => r.name === "boi")){
            message.channel.send("not boi");
        }
        message.member.roles.add(welcomeRole).catch(console.error);
    }
}