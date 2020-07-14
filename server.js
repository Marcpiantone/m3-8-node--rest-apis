"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { handleClients } = require("./handlers/clientHandlers");
const { handleClient } = require("./handlers/clientHandlers");
const { handleNewClient } = require("./handlers/clientHandlers");
const { handleDeleteClient } = require("./handlers/clientHandlers");

// handles

const handle404 = (req, res) => {
  res.status(404).send("Nothing to see here");
};

const handleHomepage = (req, res) => {
  res.status(200).send("Welcome ! Try /clients");
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

  // endpoints
  .get("/", handleHomepage)

  .get("/clients", handleClients)
  .post("/clients", handleNewClient)

  .get("/clients/:id", handleClient)
  .delete("/clients/:id", handleDeleteClient)

  .get("*", handle404)

  .listen(8000, () => console.log(`Listening on port 8000`));
