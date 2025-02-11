const pool = require("./pool")

async function getAllCharacters() {
    const { rows } = await pool.query("SELECT * FROM characters");
    return rows;
  }

async function getCharacterById(characterId) {
  const { rows } = await pool.query("SELECT * FROM characters WHERE id=($1)", [characterId])
  return rows
}

async function updateCharacterDetails(characterId, first_name, last_name, hometown, faction, first_appearence){
  await pool.query("UPDATE characters SET first_name= ($2), last_name= ($3), hometown=($4), faction=($5), first_appearence=($6) WHERE id=($1)", [characterId, first_name, last_name, hometown, faction, first_appearence])
}

async function getAllHometowns() {
  const { rows } = await pool.query("SELECT DISTINCT hometown FROM characters")
  return rows;
}

async function getAllFromHometown(hometown) {
  const { rows } = await pool.query("SELECT * FROM characters WHERE hometown=($1)", [hometown])
  return rows;
}

async function createCharacter(first_name, last_name, hometown, faction, first_appearence) {
  await pool.query("INSERT INTO characters (first_name, last_name, hometown, faction, first_appearence) VALUES (($1), ($2), ($3), ($4), ($5))", [first_name, last_name, hometown, faction, first_appearence])
}

async function deleteCharacterById(characterId) {
  console.log(characterId)
  await pool.query(`DELETE FROM characters WHERE id=($1)`, [characterId])
}

module.exports = {
    getAllCharacters, 
    getCharacterById,
    createCharacter,
    updateCharacterDetails,
    deleteCharacterById,
    getAllHometowns,
    getAllFromHometown,
  };