const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaMChart = new eschema({
  question: String,
  answer: Boolean,
});