const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  password: process.env.PP,
  port: 5432 // The default port
});