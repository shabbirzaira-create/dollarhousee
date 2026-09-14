const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  cat: { type: String, required: true },
  em: { type: String, required: true },
  badge: { type: String, default: "" },
  price: { type: Number, default: 300 },
});

module.exports = mongoose.model("Product", productSchema);