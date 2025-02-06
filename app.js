require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const { body, validationResult } = require("express-validator");
const charactersRouter = require("./routes/charactersRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", charactersRouter);
 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App server test - listening on port ${PORT}!`);
});

