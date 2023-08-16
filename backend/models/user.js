const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    hallticketnumber: String,
    mobile: String,
    password: String,
    role: String,
  },
//   { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports = user;