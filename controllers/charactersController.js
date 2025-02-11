const db = require("../db/queries");

async function getCharacters(req, res) {
  const characters = await db.getAllCharacters();
  console.log("Characters: ", characters);
  res.render("index",{
    title: "Characters",
    characters: characters,
  })
}

async function createNewCharacter(req,res) {
  const {first_name, last_name, hometown, faction, first_appearence} = req.body
  console.log(req.body)
  await db.createCharacter(first_name, last_name, hometown, faction, first_appearence)
  res.redirect("/")
}

function renderAddForm(req, res) {
  res.render("addForm", {
    title: "Add Character"
  })
}

async function deleteById(req, res){
  const characterId = req.params.id
  console.log('id:' +characterId)
  await db.deleteCharacterById(characterId)
  res.redirect("/")
}

module.exports = {
  getCharacters,
  renderAddForm,
  createNewCharacter,
  deleteById,
};
