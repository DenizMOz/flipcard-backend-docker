const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = new Schema({
  front: {
    type: String,
  },
  back: {
    type: String,
  },
  level: {
    type: String,
  },
  newDate: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
