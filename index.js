const express = require("express");
const Sequelize = require("sequelize");
const db = require("./config/database");
const router = require("./routes/credit_card");
require("dotenv").config();

const app = express();
const PORT = 5000;
app.use(express.json());
try {
  db.authenticate().catch((err) => console.log("Error:", err));
} catch (error) {
  console.log(error.message);
}

//blog routes

app.use("/credit_card-route", router);

app.listen(PORT);
