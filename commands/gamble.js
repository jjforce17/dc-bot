const profileModel = require('../models/profileSchema');

module.exports = {
        name: 'gamble',
        description: "this is the gamble command!",
        async execute(client, message, args, Discord, profileData) {
            if(!message.member.roles.cache.some(r => r.name === "boi")) return;
            if(!args.length) return message.channel.send("???");
            var card1 = Math.floor(Math.random() * 13) + 1;
            var card2 = Math.floor(Math.random() * 13) + 1;
            var card3 = Math.floor(Math.random() * 13) + 1;
            const amount = args[0];
            const cardu1 = args[1];
            const cardu2 = args[2];
            var win1amt = Math.floor(parseInt(amount) * 0.4);
            var win2amt = Math.floor(parseInt(amount) * 0.9);
            var win1 = parseInt(amount) + win1amt;
            var win2 = parseInt(amount) + win2amt;
            const mooney = profileData.dollar - parseInt(amount); 
            if(mooney <= 0) {
            return message.channel.send('dasar miskin');
            }
            while (card2 == card1) {
                card2 = Math.floor(Math.random() * 13) + 1;
                console.log(card2);
            }
            while (card3 == card1) {
                card3 = Math.floor(Math.random() * 13) + 1;
                console.log(card3);
            }
            while (card3 == card2) {
                card2 = Math.floor(Math.random() * 13) + 1;
                console.log(card3);
            };
            if(amount % 1 != 0) return message.channel.send("Value must be a whole number");
            if (!cardu1) return message.channel.send("User has not picked card 1");
            if (!cardu2) return message.channel.send("User has not picked card 2");
            if (parseInt(cardu1) <= 0 || parseInt(cardu1) >=14) return message.channel.send("Value of cards must be between 1 and 13");
            if (parseInt(cardu2) <= 0 || parseInt(cardu2) >=14) return message.channel.send("Value of cards must be between 1 and 13");
            try {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                    }, 
                    {
                        $inc : {
                            dollar: -amount,
                        },
                    }
                );
                message.channel.send(card1);
                message.channel.send(card2);
                message.channel.send(card3);
        if (cardu1 == card1 || cardu1 == card2 || cardu1 == card3) {
            if (cardu2 == card1 || cardu2 == card2 || cardu2 == card3) {
                message.channel.send("Nice! You got both right!");
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, 
                {
                    $inc : {
                        dollar: win2,
                    },
                }
            );
            }
            else {
                message.channel.send("Nice! You got one right!");
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, 
                {
                    $inc : {
                        dollar: win1,
                    },
                }
            );
            }
        }
        else if (cardu2 == card1 || cardu2 == card2 || cardu2 == card3) {
            message.channel.send("Nice! You got one right!");
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            }, 
            {
                $inc : {
                    dollar: win1,
                },
            }
        );
        }
        else {
            message.channel.send("rip rugi");
        }
    }
            catch (err) {
                console.log(err);
            }
    }
}