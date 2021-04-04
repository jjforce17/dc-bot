const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true },
    dollar: { type: Number, default: 500 },
    bank: { type: Number },
    BCard1: { type: Number },
    BCard2: { type: Number },
    BCard3: { type: Number },
    BCard4: { type: Number },
    BCard5: { type: Number },
    player1: { type: String },
    player2: { type: String },
    player3: { type: String },
    BetStage: { type: Number }, //0 = no bet, 1 = 3 cards bet/fold, 2 = 4 cards bet/ fold, 3 = 5 cards bet/fold, 4 = 5 cards all in immediately .5 = end
    Player1State: { type: Boolean },
    Player2State: { type: Boolean },
    Player3State: { type: Boolean }, //bet/fold user
    Player1Round: { type: Number },
    Player2Round: { type: Number },
    Player3Round: { type: Number }, //round number User // check if use
    Player1Turn: { type: Boolean },
    Player2Turn: { type: Boolean },
    Player3Turn: { type: Boolean },
    Player1TurnContinue: { type: Boolean },
    Player2TurnContinue: { type: Boolean },
    Player3TurnContinue: { type: Boolean }, //check if continue
    TotalBet: { type: Number },
    P1Card1: { type: Number },
    P1Card2: { type: Number },
    P2Card1: { type: Number },
    P2Card2: { type: Number },
    P3Card1: { type: Number },
    P3Card2: { type: Number },
    NowTurn: { type: Number}, //check if use
    GameState: { type: Number }, //0 = not playing 1 = Playing 2 = end 
    NowBet: { type: Number }, // current bet amount, all users min bet this much
    NowBetSet: { type: Boolean },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
