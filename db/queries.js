const pool = require("./pool")

async function getAllCharacters() {
    const { rows } = await pool.query("SELECT * FROM characters");
    return rows;
  }

async function createCharacter(first_name, last_name) {
  await pool.query("INSERT INTO characters (first_name, last_name) VALUES (($1), ($2))", [first_name, last_name])
}

module.exports = {
    getAllCharacters, 
    createCharacter
  };