module.exports = {
    name: 'bal',
    description: "check balance",
    execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        message.channel.send(`${message.author.username}, your balance is ${profileData.dollar}.`);
    }
}