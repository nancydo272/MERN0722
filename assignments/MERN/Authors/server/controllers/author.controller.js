const Author = require('../models/author.model');

    module.exports = {
    getAuthors: (req, res) => {
        Author.find({})
        .then((allAuthors) => {
            console.log(allAuthors);
            res.json(allAuthors);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with findAll', error: err.errors }),
        );
    },
    createAuthor: (req, res) => {
        console.log(req.body);
        Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with create', error: err.errors }),
        );
    },
    getAuthorById: (req, res) => {
        Author.findOne({ _id: req.params.id })
        .then((author) => {
            console.log(author);
            res.json(author);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with find one', error: err.errors }),
        );
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
        .then((author) => {
            console.log(author);
            res.json(author);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with delete', error: err.errors }),
        );
    },
    updateAuthor: (req, res) => {
        Author.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((author) => {
            console.log(author);
            res.json(author);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with update', error: err.errors }),
        );
    },
};