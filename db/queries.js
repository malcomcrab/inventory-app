const pool = require("./pool")

async function getAllCharacters() {
    const { rows } = await pool.query("SELECT * FROM characters");
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
    createCharacter,
    deleteCharacterById
  };