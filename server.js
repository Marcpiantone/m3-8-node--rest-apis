"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { handleClients } = require("./handlers/clientHandlers");
const { handleClient } = require("./handlers/clientHandlers");
const { handleNewClient } = require("./handlers/clientHandlers");
const { handleDeleteClient } = require("./handlers/clientHandlers");
const { handleTestWord } = require("./handlers/hangmanHandlers");
const { handleRandomWord } = require("./handlers/hangmanHandlers");
const { handleGuessLetter1stImplem } = require("./handlers/hangmanHandlers");
const { handleGuessLetter2ndImplem } = require("./handlers/hangmanHandlers");

// handles

const handle404 = (req, res) => {
  res.status(404).send("Nothing to see here");
};

const handleHomepage = (req, res) => {
  res.status(200).send("Welcome ! Try /clients or /hangman");
};

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints E2

  .get("/", handleHomepage)

  .get("/clients", handleClients)
  .post("/clients", handleNewClient)

  .get("/clients/:id", handleClient)
  .delete("/clients/:id", handleDeleteClient)

  // endpoints E3
  .get("/hangman/words/:id", handleTestWord)

  .get("/hangman/words", handleRandomWord)

  .get("/hangman/guess/:id/:letter", handleGuessLetter2ndImplem)

  .get("*", handle404)

  .listen(8000, () => console.log(`Listening on port 8000`));
