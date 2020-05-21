const express = require("express");

const Disciplines = require("../disciplines/disciplines-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/disciplines", (req, res) => {
  Disciplines.getAll()
    .then(disciplines => {
      res.status(200).json(disciplines);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
