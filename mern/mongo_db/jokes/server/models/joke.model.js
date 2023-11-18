//the model -the rules the entries or inserts need to follow
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Setup is required"],
      minLength: [10, "{PATH} should at least be 10 characters long"],
    },
    punchline: {
      type: String,
      required: [true, "Punchline is required"],
      minLength: [3, "{PATH} should at least be 3 characters long"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
