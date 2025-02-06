// routes/usersRouter.js
const { Router } = require("express");
const charactersController = require("../controllers/charactersController");
const charactersRouter = Router();

charactersRouter.get("/", charactersController.getCharacters);

module.exports = charactersRouter;