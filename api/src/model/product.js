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
    enum: ["featured", "products", "offer"],
    default: "products",
  }
});

const Product = mongoose.model("Product", productSchema);
