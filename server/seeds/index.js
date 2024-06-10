const mongoose = require("mongoose");

const House = require("../models/house");

mongoose.connect("mongodb://localhost:27017/Nexter");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection:error:"));
db.once("open", () => {
  console.log("Database connected!");
});

const seedDB = async () => {
  await House.deleteMany({});
  const newHouse1 = new House({
    name: "Beautify Family House",
    location: "USA",
    rooms: 5,
    size: 5,
    price: 1200000,
    img: "img/house-1.jpeg",
  });
  await newHouse1.save();

  const newHouse2 = new House({
    name: "Modern Glass Villa",
    location: "Canada",
    rooms: 6,
    size: 450,
    price: 2750000,
    img: "img/house-2.jpeg",
  });
  await newHouse2.save();

  const newHouse3 = new House({
    name: "Cozy Country House",
    location: "UK",
    rooms: 4,
    size: 250,
    price: 850000,
    img: "img/house-3.jpeg",
  });
  await newHouse3.save();

  const newHouse4 = new House({
    name: "Large Rustic Villa",
    location: "Portugal",
    rooms: 6,
    size: 480,
    price: 1950000,
    img: "img/house-4.jpeg",
  });
  await newHouse4.save();

  const newHouse5 = new House({
    name: "Majestic Palace",
    location: "Germany",
    rooms: 18,
    size: 4230,
    price: 9500000,
    img: "img/house-5.jpeg",
  });
  await newHouse5.save();

  const newHouse6 = new House({
    name: "Modern Family Apartment",
    location: "Italy",
    rooms: 3,
    size: 180,
    price: 300000,
    img: "img/house-6.jpeg",
  });
  await newHouse6.save();
};

seedDB().then(() => {
  mongoose.connection.close();
});
