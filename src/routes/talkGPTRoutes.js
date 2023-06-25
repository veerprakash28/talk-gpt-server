const { Router } = require("express");
const talkGPTController = require("../controllers/talkGPTController");
const talkGPTRouter = Router();

talkGPTRouter.post("/getGPTResponse", talkGPTController.getGPTReponse);

module.exports = talkGPTRouter;
