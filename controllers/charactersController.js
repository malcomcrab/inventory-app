const db = require("../db/queries");

async function getCharacters(req, res) {
  const characters = await db.getAllCharacters();
  console.log("Characters: ", characters);
  res.render("index",{
    title: "Characters",
    characters: characters,
  })
}

async function getFromHometown(req, res) {
  const hometown = req.params.hometown
  const hometownCapitalised = hometown[0].toUpperCase() + hometown.slice(1)
  const characters = await db.getAllFromHometown(hometownCapitalised);
  res.render("index", {
    title: hometownCapitalised,
    characters: characters
  })
}

async function getAllHometownNames(req, res) {
  const hometowns = await db.getAllHometowns();
  console.log(hometowns)
  res.render("columnDataList", {
    title: "Hometowns",
    hometowns: hometowns
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
  getAllHometownNames,
  getFromHometown
};
