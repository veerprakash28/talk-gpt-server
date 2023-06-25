const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bodyParser = require("body-parser");
const talkGPTRouter = require("./src/routes/talkGPTRoutes");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, (err) => {
  if (err) {
    console.log("Server Failed to start");
  }
  console.log("Server started on port: ", port);
});

// Setting up Environment
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/", talkGPTRouter);
module.exports = app;
