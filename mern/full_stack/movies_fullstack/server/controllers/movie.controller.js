const Movie = require("../models/movie.model");

module.exports.findAllMovies = (req, res) => {
  Movie.find()
    .then((allDaMovies) => {
      res.json(allDaMovies);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.findOneSingleMovie = (req, res) => {
  Movie.findOne({ _id: req.params.id })
    .then((oneSingleMovie) => {
      res.json(oneSingleMovie);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.createNewMovie = (req, res) => {
  Movie.create(req.body)
    .then((newlyCreatedMovie) => {
      res.json(newlyCreatedMovie);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateExistingMovie = (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedMovie) => {
      res.json(updatedMovie);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.deleteAnExistingMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
