const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const db = require("../server/models");

// const houseRoutes = require("./routes/houses");

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/houses", houseRoutes);

app.get("/", (req, res) => {
  res.send("Hit me at the top level");
});

app.get("/api/houses", (req, res) => {
  db.House.find()
    .then((houses) => res.json(houses))
    .catch((err) => res.send(err));
});

app.post("/api/houses", (req, res) => {
  db.House.create(req.body)
    .then((newHouse) => {
      res.status(201).json(newHouse);
    })
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
