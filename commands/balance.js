module.exports = {
    name: 'bal',
    description: "check balance",
    execute(client, message, args, Discord, profileData) {
        message.channel.send(`${message.author.username}, your balance is ${profileData.dollar}.`);
    }
}