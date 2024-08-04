const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  cityTown: {
    type: String,
    required: [true, 'City/Town is required']
  },
  number: {
    type: String,
    required: [true, 'Number is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  products:{
    type: Array,
    required:true
  }
});

const Order = mongoose.model('order', checkoutSchema);

module.exports = Order;
