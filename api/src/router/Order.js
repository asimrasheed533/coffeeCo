const express = require('express');
const router = express.Router();
const Order = require('../model/order');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, cityTown, number, email, products } = req.body;

    // Create a new order
    const newOrder = new Order({
      firstName,
      lastName,
      cityTown,
      number,
      email,
      products
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({
      message: 'Order placed successfully',
      data: newOrder
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      message: 'Orders retrieved successfully',
      data: orders
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: 'Order not found'
      });
    }

    res.status(200).json({
      message: 'Order retrieved successfully',
      data: order
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Update an order by ID
router.put('/:id', async (req, res) => {
  try {
    const { firstName, lastName, cityTown, number, email, products } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, cityTown, number, email, products },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: 'Order not found'
      });
    }

    res.status(200).json({
      message: 'Order updated successfully',
      data: updatedOrder
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Delete an order by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({
        message: 'Order not found'
      });
    }

    res.status(200).json({
      message: 'Order deleted successfully',
      data: deletedOrder
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;
