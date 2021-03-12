const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  lastname: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
  },
  password: { type: String, required: true },
  goalweight: {
    type: Number,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model of user going to user collection
const User = mongoose.model("User", UserSchema);

module.exports = User;
