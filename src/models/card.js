const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = new Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
  edittable: {
    type: Boolean,
    default: false,
  },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
