const mongoose = require("mongoose");

//the model -the rules the entries or inserts need to follow
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"], //insted of title is required we can use "{PATH} is required"
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
      min: [1, "must be valid"],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required"], //insted of title is required we can use "{PATH} is required"
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
  },
  { timestamps: true }
); //that is to automatically create the created_at and updated_at automatically

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
