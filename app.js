require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const { body, validationResult } = require("express-validator");

app.get("/", (req, res) => res.send(`App server test - listening on port ${PORT}!`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App server test - listening on port ${PORT}!`);
});