const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  img: String,
  stock: Number,
  category: String,
  description: String,
  isFeatured: Boolean,
  isActive: Boolean,
  type : {
    type: String,
    enum: ['product', 'featured', 'latest'],
    default: 'product'
  
  }
});
module.exports = mongoose.model("Product", productSchema);

