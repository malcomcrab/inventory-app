const db = require("../db/queries");

async function getCharacters(req, res) {
  const characters = await db.getAllCharacters();
  console.log("Characters: ", characters);
  res.end()
}

module.exports = {
  getCharacters,
};
