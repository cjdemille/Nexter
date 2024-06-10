const express = require("express");
const router = express.Router();

const db = require("../models");

router.route("/").post((req, res) => {
  db.House.create(req.body)
    .then((newHouse) => {
      res.status(201).json(newHouse);
    })
    .catch((err) => res.send(err));
});
