const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name       : { type: String, required: true },
  profile_pic:         String,
  location   : [       String, [[Number], [Number]]],
  reminder   :         Date  ,
  note       :         String
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
