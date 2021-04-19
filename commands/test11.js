const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg11',
    description: "test11",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "Big boi")) return;
        const botID = "803868333341802499";
        const botData = await profileModel.findOne({ userID: botID });
        var b1val = "";
        var bc1sym = "";
        var bc1num = "";
        var stringnum = "";
        function valuecheckbc1() {
            if(b1val == 1) {
                bc1num = "Ace"
            }
            else if(1 < b1val <= 10) {
                stringnum = b1val.toString();
                bc1num = stringnum;
            }
            else if(b1val == 11) {
                bc1num = "Jack"
            }
            else if(b1val == 12) {
                bc1num = "Queen"
            }
            else if(b1val == 13) {
                bc1num = "King"
            }
        }
        if (botData.BCard1 <= 13) {
            bc1sym = "diamond";
            b1val = botData.BCard1;
            valuecheckbc1();
        }
        else if (14 <= botData.BCard1 && botData.BCard1 <= 26) {
            bc1sym = "clover";
            b1val = botData.BCard1 - 13;
            valuecheckbc1();
        }
        else if (27 <= botData.BCard1 && botData.BCard1 <= 39) {
            bc1sym = "heart";
            b1val = botData.BCard1 - 26;
            valuecheckbc1();
        }
        else if (40 <= botData.BCard1 && botData.BCard1 <= 52) {
            bc1sym = "spade";
            b1val = botData.BCard1 - 39;
            valuecheckbc1();
        }
        message.channel.send(bc1num + " " + bc1sym)
    }
}