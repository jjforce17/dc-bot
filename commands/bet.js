const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'betp',
    description: "bet Poker",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        if(!message.member.roles.cache.some(r => r.name === "Poker1")) return message.channel.send("Please join a room");
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        const Player1ID = botData.player1;
        const Player2ID = botData.player2;
        const Player3ID = botData.player3;
        if (botData.player1 == "000" || botData.player2 == "000" || botData.player3 == "000") return message.channel.send("3 Players Required.");
        const player1Data = await profileModel.findOne({ userID: Player1ID });
        const player2Data = await profileModel.findOne({ userID: Player2ID });
        const player3Data = await profileModel.findOne({ userID: Player3ID });
        const amount = args[0];
        const allin = args[1];
        
        if (amount == "all" && allin == "in") {
            amount = profileData.dollar - 1;
            try {
                let filter = m => m => m.author.id === message.author.id && m.content == "y" || m.content == "Y"|| m.content == "n"|| m.content == "N";;
                    message.channel.send("Press Y to confirm, N to cancel").then(() => {
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000,
                        errors: ['time']
                     })
                    .then(async (message) => {
                        message = message.first()
                        if (message.content.toUpperCase() == 'Y') {
                            const targetData = await profileModel.findOne({userID: target.id});
                                if (!targetData) return;
                                await profileModel.findOneAndUpdate({
                                    userID: message.author.id,
                                }, 
                                {
                                    $inc : {
                                    dollar: -amount,
                                    },
                                }
                                );
                                message.channel.send("All in" + amount);
                        } else if (message.content.toUpperCase() == 'N') {
                        message.channel.send('Cancelled');
                        } else {
                        message.channel.send('Invalid response');
                        }
                        })
                       .catch(collected => {
                            message.channel.send('Timed out');
                        });
                })
                
            } catch (err) {
                console.log(err);
                }
        }
        else if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
        if (botData.BetStage == 1) {
            
        }
    }
}