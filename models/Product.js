const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
