const express = require("express");
const addCreditCard = require("../controllers/credit_card");
const router = express.Router();

router.post("/addCreditCard", addCreditCard);

module.exports = router;
