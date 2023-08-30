const express = require('express');
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const MenuItem = require('../models/MenuItem');

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage });

// Use bodyParser to parse form fields
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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
router.post('/menu', upload.single('pic'), async (req, res) => {
  try {
    const { category, name, price } = req.body;

    // Get the uploaded image data from multer
    const picBuffer = req.file.buffer; // Assuming 'pic' is the field name for the image

    // Create a new instance of the MenuItem model with the extracted data
    const menuItem = new MenuItem({
      category,
      pic: picBuffer, // Store the image buffer
      name,
      price,
    });

    // Save the menu item to the database
    const savedMenuItem = await menuItem.save();

    res.json({ message: 'Menu item added successfully', menuItem: savedMenuItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get an image by its ID
router.get('/menu/:id/image', async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const menuItem = await MenuItem.findById(menuItemId);

    if (!menuItem || !menuItem.pic) {
      res.status(404).json({ message: 'Image not found' });
      return;
    }

    // Set the Content-Type header
    res.set('Content-Type', 'image/jpeg'); // Change to the appropriate content type

    // Send the image data as the response body
    res.send(menuItem.pic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
