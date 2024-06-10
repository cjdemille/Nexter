const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  name: {
    type: String,
    required: "Name cannot be blank",
  },
  location: {
    type: String,
    required: "Location cannot be blank",
  },
  rooms: {
    type: Number,
    required: "Rooms cannot be blank",
  },
  size: {
    type: Number,
    required: "Size cannot be blank",
  },
  price: {
    type: Number,
    required: "Price cannot be left blank",
  },
  favorited: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    required: "Each listing must have a photo",
  },
});

module.exports = mongoose.model("House", houseSchema);
