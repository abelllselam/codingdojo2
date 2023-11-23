const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then((allDaPets) => {
      res.json(allDaPets);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.findOneSinglePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((oneSinglePet) => {
      res.json(oneSinglePet);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then((newlyCreatedPet) => {
      res.json(newlyCreatedPet);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => {
      res.json(updatedPet);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
