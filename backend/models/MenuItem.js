const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  category: String,
  pic: Buffer, // Storing the image data as a Buffer
  name: String,
  price: Number,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
