const mongoose = require("mongoose");

//the model -the rules the entries or inserts need to follow
const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"], //insted of title is required we can use "{PATH} is required"
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    image: {
      type: String,
    },
    releaseYear: {
      type: Number,
      required: [true, "Please provide a date"],
      min: [1895, "must be valid"],
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
); //that is to automatically create the created_at and updated_at automatically

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
