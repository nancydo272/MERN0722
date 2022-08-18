const Pet = require('../models/pet.model');

    module.exports = {
    getPets: (req, res) => {
        Pet.find({})
        .then((allPets) => {
            console.log(allPets);
            res.json(allPets);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with findAll', error: err.errors }),
        );
    },
    createPet: (req, res) => {
        console.log(req.body);
        Pet.create(req.body)
        .then((newPet) => {
            console.log(newPet);
            res.json(newPet);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with create', error: err.errors }),
        );
    },
    getPetById: (req, res) => {
        Pet.findOne({ _id: req.params.id })
        .then((pet) => {
            console.log(pet);
            res.json(pet);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with find one', error: err.errors }),
        );
    },
    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
        .then((pet) => {
            console.log(pet);
            res.json(pet);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with delete', error: err.errors }),
        );
    },
    updatePet: (req, res) => {
        Pet.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true, context: 'query'})
        .then((pet) => {
            console.log(pet);
            res.json(pet);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with update', error: err.errors }),
        );
    },
};