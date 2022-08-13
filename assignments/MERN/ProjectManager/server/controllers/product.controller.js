const Product = require('../models/product.model');

    module.exports = {
    getProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with findAll', error: err.errors }),
        );
    },
    createProduct: (req, res) => {
        console.log(req.body);
        Product.create(req.body)
        .then((newProduct) => {
            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with create', error: err.errors }),
        );
    },
    getProductById: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((product) => {
            console.log(product);
            res.json(product);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with find one', error: err.errors }),
        );
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then((product) => {
            console.log(product);
            res.json(product);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with delete', error: err.errors }),
        );
    },
    updateProduct: (req, res) => {
        Product.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((product) => {
            console.log(product);
            res.json(product);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with update', error: err.errors }),
        );
    },
};