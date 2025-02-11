const db = require("../db/queries");

const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "Add a Character" },
  { href: "hometowns", text: "Settlements" },
];

async function getCharacters(req, res) {
  const characters = await db.getAllCharacters();
  console.log("Characters: ", characters);
  res.render("index", {
    links: links,
    title: "Characters",
    characters: characters,
  })
}

async function getFromHometown(req, res) {
  const hometown = req.params.hometown
  const hometownCapitalised = hometown[0].toUpperCase() + hometown.slice(1)
  const characters = await db.getAllFromHometown(hometownCapitalised);
  res.render("index", {
    links: links,
    title: hometownCapitalised,
    characters: characters
  })
}

async function getAllHometownNames(req, res) {
  const hometowns = await db.getAllHometowns();
  console.log(hometowns)
  res.render("settlementList", {
    links: links,
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
    links: links,
    title: "Add Character"
  })
}

async function renderCharacterUpdateForm(req, res){
  const characterId = req.params.id 
  const character = await db.getCharacterById(characterId)
  console.log(character)
  res.render("updateForm", {
    links: links, 
    title: "Update Character",
    character: character,
  })
}

async function updateCharacterinfo(req, res) {
  const characterId = req.params.id
  console.log(characterId)
  const {first_name, last_name, hometown, faction, first_appearence} = req.body
  await db.updateCharacterDetails(characterId, first_name, last_name, hometown, faction, first_appearence)
  res.redirect('/')
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
  renderCharacterUpdateForm,
  updateCharacterinfo,
  deleteById,
  getAllHometownNames,
  getFromHometown
};
