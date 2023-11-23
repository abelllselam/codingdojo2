const mongoose = require("mongoose");

//the model -the rules the entries or inserts need to follow
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"], //insted of title is required we can use "{PATH} is required"
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    type: {
      type: String,
      required: [true, "{PATH} is required"], //insted of title is required we can use "{PATH} is required"
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required"], //insted of title is required we can use "{PATH} is required"
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    skill_1: {
      type: String,
    },
    skill_2: {
      type: String,
    },
    skill_3: {
      type: String,
    },
  },
  { timestamps: true }
); //that is to automatically create the created_at and updated_at automatically

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
