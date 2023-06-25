const { Router } = require("express");
const talkGPTController = require("../controllers/talkGPTController");
const talkGPTRouter = Router();

talkGPTRouter.get("/", (req, res) => {
  res.send("Server is up and running");
});
talkGPTRouter.post("/getGPTResponse", talkGPTController.getGPTReponse);

module.exports = talkGPTRouter;
