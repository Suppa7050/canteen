const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Route to get all menu items by category
router.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    const menuByCategory = {};
    
    menuItems.forEach(item => {
      if (!menuByCategory[item.category]) {
        menuByCategory[item.category] = [];
      }
      menuByCategory[item.category].push(item);
    });

    res.json(menuByCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Route to add a new menu item
router.post("/menu", async (req, res) => {
  try {
    const { category, pic, name, price } = req.body;

    // Create a new instance of the MenuItem model with the extracted data
    const menuItem = new MenuItem({
      category,
      pic,
      name,
      price,
    });

    // Save the menu item to the database
    const savedMenuItem = await menuItem.save();

    res.json({ message: "Menu item added successfully", menuItem: savedMenuItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;



