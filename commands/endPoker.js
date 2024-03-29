const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'endp',
    description: "endp",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return message.channel.send("Admin Command");
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        var winnings = botData.TotalBet;
        try {
            var p1user = client.users.cache.get(botData.player1);
            var p2user = client.users.cache.get(botData.player2);
            var p3user = client.users.cache.get(botData.player3);
        } catch (error) {
            console.log(error);
        }
        try {
            if(botData.poker1winner == "p1") {
            await profileModel.findOneAndUpdate({
                userID: botData.player1,
                }, 
                {
                    $inc : {
                    dollar: winnings,
                    },
                })
                message.channel.send(p1user.username + " won " + winnings + " coins.")
            }
            if(botData.poker1winner == "p2") {
                await profileModel.findOneAndUpdate({
                    userID: botData.player2,
                    }, 
                    {
                        $inc : {
                        dollar: winnings,
                        },
                    })
                    message.channel.send(p2user.username + " won " + botData.winnings + " coins.")
                }
                if(botData.poker1winner == "p3") {
                    await profileModel.findOneAndUpdate({
                        userID: botData.player3,
                        }, 
                        {
                            $inc : {
                            dollar: winnings,
                            },
                        })
                        message.channel.send(p3user.username + " won " + winnings + " coins.")
                    }
                ender();
        }
        catch (err) {
            console.log(err);
         }
        async function ender() {
        try {
            await profileModel.findOneAndUpdate({ userID: botID }, 
            {$set: {
                    player1: "000",
                    player2: "000",
                    player3: "000",
                    BetStage: 0,
                    TotalBet: 0,
                    NowTurn: 0,
                    GameState: 0,
                    NowBet: 0,
                    BCard1: 0,
                    BCard2: 0,
                    BCard3: 0,
                    BCard4: 0,
                    BCard5: 0,
                    P1Card1: 0,
                    P1Card2: 0,
                    P2Card1: 0,
                    P2Card2: 0,
                    P3Card1: 0,
                    P3Card2: 0,
                    Player1State: false,
                    Player2State: false,
                    Player3State: false,
                    Player1Round: 0,
                    Player2Round: 0,
                    Player3Round: 0,
                    p1continue: false,
                    p2continue: false,
                    p3continue: false,
                    NowBetSet: false,
                    PlayerAmount: 0,
                    Player1FoldConfirm : false,
                    Player2FoldConfirm : false,
                    Player3FoldConfirm : false,
                    Player1NowBet: 0,
                    Player2NowBet: 0,
                    Player3NowBet: 0,
                    poker1winner: "...", 
                }
            })
        message.channel.send("Ended");
        } catch (err) {
            console.log(err);
            }
        var rolea = message.guild.roles.cache.find(r => r.name === "Poker1");
        rolea.members.forEach((member, i) => { // Looping through the members of Role.
            setTimeout(() => {
                member.roles.remove(rolea); // Removing the Role.
            }, i * 1000);
        });
    } 
        

    }
}

