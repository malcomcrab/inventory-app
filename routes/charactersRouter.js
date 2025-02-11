// routes/usersRouter.js
const { Router } = require("express");
const charactersController = require("../controllers/charactersController");
const charactersRouter = Router();

charactersRouter.get("/", charactersController.getCharacters);
charactersRouter.get("/new", charactersController.renderAddForm)
charactersRouter.post("/create", charactersController.createNewCharacter)
charactersRouter.post("/:id/delete", charactersController.deleteById)
charactersRouter.get("/hometowns", charactersController.getAllHometownNames)
charactersRouter.get("/:hometown/bytown", charactersController.getFromHometown)



module.exports = charactersRouter;