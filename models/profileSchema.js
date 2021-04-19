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
    Player3Round: { type: Number }, //check if use
    Player1Turn: { type: Boolean },
    Player2Turn: { type: Boolean },
    Player3Turn: { type: Boolean },
    p1continue: { type: Boolean },
    p2continue: { type: Boolean },
    p3continue: { type: Boolean }, 
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
    PlayerAmount: { type: Number },
    Player1FoldConfirm : { type: Boolean },
    Player2FoldConfirm : { type: Boolean },
    Player3FoldConfirm : { type: Boolean },
    Player1NowBet: { type: Number },
    Player2NowBet: { type: Number },
    Player3NowBet: { type: Number }, //player bet --- compare with now bet
    D1N: { type: String },
    D2N: { type: String },
    D3N: { type: String },
    D4N: { type: String },
    D5N: { type: String },
    // P1N1: { type: String },
    // P1N2: { type: String },
    // P2N1: { type: String },
    // P2N2: { type: String },
    // P3N1: { type: String },
    // P3N2: { type: String },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
