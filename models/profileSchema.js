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
    BetStage: { type: Number }, //0 = no bet, 1 = first pay, 2 = 3 cards bet/fold, 3 = 4 cards bet/ fold, 4 = 5 cards bet/fold, 4 = 5 cards all in immediately.
    PlayerState: { type: Boolean },
    TotalBet: { type: Number }
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
