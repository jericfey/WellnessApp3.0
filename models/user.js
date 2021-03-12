const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model of user going to user collection
const User = mongoose.model("User", UserSchema);

module.exports = User;
