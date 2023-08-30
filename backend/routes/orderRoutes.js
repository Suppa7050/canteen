const express = require("express");
const router = express.Router();
const Order = require("../models/order"); // Make sure the path to the Order model is correct

router.post("/create", async (req, res) => {
  try {
    const { studentId, items, totalPrice } = req.body;

    // Create a new order instance using the Order schema
    const order = new Order({
      studentId,
      items,
      totalPrice,
    });

    // Save the order to the database
    const savedOrder = await order.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
router.get("/list", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      orders: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.delete('/delete', async (req, res) => {
    try {
      const orderId = req.body.order_id;
  
      // Check if the order with the provided ID exists
      const orderToDelete = await Order.findById(orderId);
      if (!orderToDelete) {
        return res.status(404).json({ success: false, message: 'Order not found' });
      }
  
      // Delete the order
      await Order.deleteOne({ _id: orderId });
  
      res.status(200).json({
        success: true,
        message: 'Order deleted successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
module.exports = router;
