const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost:27017/Nexter");

mongoose.Promise = Promise;

module.exports.House = require("./house");

const db = mongoose.connection;

db.on("error", console.log.bind(console, "connection:error"));

db.once("open", () => {
  console.log("Database Connected!");
});
