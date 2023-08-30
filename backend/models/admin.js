const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    // adminkey: String,
  },
//   { timestamps: true }
);

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;