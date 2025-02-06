const pool = require("./pool")

async function getAllCharacters() {
    const { rows } = await pool.query("SELECT * FROM characters");
    return rows;
  }

module.exports = {
    getAllCharacters
  };