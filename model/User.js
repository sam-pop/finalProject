const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  profile_pic: { type: String, required: true },
  location: [Number, [Number]]
});

const User = mongoose.model("User", userSchema);

// User protoype method to check if our user password is valid
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// pre table creation hook to hash the user password
User.hook("beforeCreate", function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null);
});

module.exports = User;
