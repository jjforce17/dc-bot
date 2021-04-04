const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg5',
    description: "testg5",
    async execute(client, message, args, Discord, profileData) {
        if(!message.member.roles.cache.some(r => r.name === "boi")) return;
        const botID = "803868333341802499";
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
                    Player1Turn: false,
                    Player2Turn: false,
                    Player3Turn: false,
                    NowBetSet: false,
                    Player1TurnContinue: false,
                    Player2TurnContinue: false,
                    Player3TurnContinue: false,
                }
            }
        )
        } catch (err) {
            console.log(err);
            }
        
    }
}

