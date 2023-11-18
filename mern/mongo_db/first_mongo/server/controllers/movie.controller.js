const Movie = require("../models/movie.model");

module.exports.findAllMovies = (req, res) => {
  Movie.find()
    .then((allDaMovies) => {
      res.json({ movies: allDaMovies });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.findOneSingleMovie = (req, res) => {
  Movie.findOne({ _id: req.params.id })
    .then((oneSingleMovie) => {
      res.json({ movie: oneSingleMovie });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.createNewMovie = (req, res) => {
  Movie.create(req.body)
    .then((newlyCreatedMovie) => {
      res.json({ movie: newlyCreatedMovie });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.updateExistingMovie = (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedMovie) => {
      res.json({ movie: updatedMovie });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.deleteAnExistingMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json(err);
    });
};
