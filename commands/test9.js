const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg9',
    description: "test9",
    async execute(client, message, args, Discord, profileData) {
        var PlayerRandNum = Math.floor(Math.random() * 3) + 1;
        var place = 0;
        var user1 = 123;
        var user2 = 0;
        var user3 = 123;
        if (PlayerRandNum == 1) {
            if (user1 != 0 && user12 != 0) {
                while (PlayerRandNum == 1 || PlayerRandNum == 2) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
        }
        else if (PlayerRandNum == 2) {
            if (user2 != 0) {
                while (PlayerRandNum == 2) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
            
        }
        else if (PlayerRandNum == 3) {
            if (user3 != 0) {
                while (PlayerRandNum == 3) {
                    PlayerRandNum = Math.floor(Math.random() * 3) + 1;
                }
            }
        }
        place = PlayerRandNum;
    message.channel.send(place);
    }
}