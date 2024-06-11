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

// REALTORS API
// READ ALL

app.get("/api/realtors", (req, res) => {
  db.Realtor.find()
    .then((realtors) =>res.json(realtors))
    .catch((err) => res.send(err));
})
// CREATE
app.post("/api/realtors", (req, res) => {
  db.Realtor.create(req.body)
    .then((newRealtor)=> {
      res.status(201).json(newRealtor)
    })
    .catch((err) => res.send(err));
})


// READ ONE

app.get("/api/realtors/:realtorId", (req, res) =>{
  db.Realtor.findById(req.params.realtorId)
    .then((foundRealtor) => res.json(foundRealtor))
    .catch((err) => res.send(err));
})

// UPDATE
app.put("/api/realtors/:realtorId", (req, res) => {
  db.Realtor.findOneAndReplace({_id:req.params.realtorId}, req.body, {new:true})
    .then((realtor) => res.json(realtor))
    .catch((err) => res.send(err))
})

//DELETE 

app.delete("/api/realtors/:realtorId", (req, res) =>{
  db.Realtor.findByIdAndDelete({_id:req.params.realtorId})
    .then(()=> res.json({message:"we deleted it"}))
    .catch((err) => res.send(err))
})


// HOUSES API
// READ ALL
app.get("/api/houses", (req, res) => {
  db.House.find()
    .then((houses) => res.json(houses))
    .catch((err) => res.send(err));
});

// CREATE
app.post("/api/houses", (req, res) => {
  db.House.create(req.body)
    .then((newHouse) => {
      res.status(201).json(newHouse);
    })
    .catch((err) => res.send(err));
});

// READ ONE
app.get("/api/houses/:houseId", (req, res) =>{
  db.House.findById(req.params.houseId)
    .then((foundHouse) => res.json(foundHouse))
    .catch((err) => res.send(err))
})


// UPDATE

app.put("/api/houses/:houseId", (req, res) => {
  db.House.findOneAndReplace({_id: req.params.houseId}, req.body, {new:true})
    .then((house) => res.json(house))
    .catch((err) => res.send(err))
})

// DELETE

app.delete("/api/houses/:houseId", (req, res) => {
  db.House.findOneAndDelete({id: req.params.todoId})
    .then(()=> res.json({message:"we deleted it"}))
    .catch((err) => res.send(err))
})







app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
