const Movie = require('../models/movie.model');

    module.exports = {
    getMovies: (req, res) => {
        Movie.find({})
        .then((allMovies) => {
            console.log(allMovies);
            res.json(allMovies);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with findAll', error: err.errors }),
        );
    },
    createMovie: (req, res) => {
        console.log(req.body);
        Movie.create(req.body)
        .then((newMovie) => {
            console.log(newMovie);
            res.json(newMovie);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with create', error: err.errors }),
        );
    },
    getMovieById: (req, res) => {
        Movie.findOne({ _id: req.params.id })
        .then((movie) => {
            console.log(movie);
            res.json(movie);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with find one', error: err.errors }),
        );
    },
    deleteMovie: (req, res) => {
        Movie.deleteOne({ _id: req.params.id })
        .then((movie) => {
            console.log(movie);
            res.json(movie);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with delete', error: err.errors }),
        );
    },
    updateMovie: (req, res) => {
        Movie.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((movie) => {
            console.log(movie);
            res.json(movie);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with update', error: err.errors }),
        );
    },
};