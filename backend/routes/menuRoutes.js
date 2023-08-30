// const express = require('express');
// const router = express.Router();
// const MenuItem = require('../models/MenuItem');

// // Route to get all menu items by category
// router.get('/menu', async (req, res) => {
//   try {
//     const menuItems = await MenuItem.find();
//     const menuByCategory = {};
    
//     menuItems.forEach(item => {
//       if (!menuByCategory[item.category]) {
//         menuByCategory[item.category] = [];
//       }
//       menuByCategory[item.category].push(item);
//     });

//     res.json(menuByCategory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// // Route to add a new menu item
// router.post("/menu", async (req, res) => {
//   try {
//     const { category, pic, name, price } = req.body;

//     // Create a new instance of the MenuItem model with the extracted data
//     const menuItem = new MenuItem({
//       category,
//       pic,
//       name,
//       price,
//     });

//     // Save the menu item to the database
//     const savedMenuItem = await menuItem.save();

//     res.json({ message: "Menu item added successfully", menuItem: savedMenuItem });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer
const bodyParser = require('body-parser'); // Import body-parser
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
    const picBase64 = picBuffer.toString('base64'); // Convert the buffer to a Base64 encoded string

    // Create a new instance of the MenuItem model with the extracted data
    const menuItem = new MenuItem({
      category,
      pic: picBase64, // Store the image as a Base64 encoded string
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


module.exports = router;
