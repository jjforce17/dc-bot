module.exports = {
    name: 'bal',
    description: "check balance",
    async execute(client, message, args, Discord, profileData) {
        message.channel.send(`${message.author.username}, your balance is ${profileData.dollar}.`);
    }
}