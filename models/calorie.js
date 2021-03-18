const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calorieSchema = new Schema({
  calorie: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const  Calorie = mongoose.model(" Calorie", calorieSchema);

module.exports =  Calorie;
