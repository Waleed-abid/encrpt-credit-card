const express = require("express");
const router = express.Router();
const db = require("../config/database");
const credit_Card = require("../models/index").credit_card;
const luhn = require("luhn-js");
const encrypt = require("../helpers/encrypt");

const addCreditCard = async (req, res) => {
  const { credit_card, holder_name, cvc } = req.body;

  //insert into table
  const isValid = luhn.isValid(credit_Card);
  if (isValid === false) {
    return res.status(400).send({ message: "invalid credit card" });
  }
  var hw = encrypt(credit_card);
  const card_details = credit_Card
    .create({
      credit_card: hw,
      holder_name,
      cvc,
    })
    .then(() => {
      res.status(200).send({ message: "Data added to database" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = addCreditCard;
