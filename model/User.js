const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email      : { type: String, required: true },
  password   : { type: String, required: true },
  name       : { type: String, required: true },
  profile_pic: { type: String, required: true },
  location   : [Number]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
