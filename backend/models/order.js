const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming you're using ObjectId to represent students
    // ref: 'Student', // Reference the Student model for the relationship
    required: true,
  },
  items: [{
    name: String,
    quantity: Number,
  }],
  totalPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
