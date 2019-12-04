
const mongoose = require("mongoose");
const Schema = mongoose.Schema
let TaskSchema = new Schema({
    number1: Number,
    number2: Number,
    moltNumber: Number,
    addNumber: Number
  });
module.exports = mongoose.model("numbers", TaskSchema);
