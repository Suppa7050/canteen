const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  category: String,
  pic: String, 
  name: String,
  price: Number,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
