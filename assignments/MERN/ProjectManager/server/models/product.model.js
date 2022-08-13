const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    title: {
        type: String, 
        required: [true, 'A product title is required!!!'],
        maxlength: [40, 'The title length must be at most 40 characters!'],
        minlength: [2, 'The title length must be at least 2 characters!'],
    },
    price: {
        type: Number, 
        min: [1.00, 'Need to cost more than $1'],
    },
    description: {
        type: String, 
        required: [true, 'A product description is required!!!'],
        maxlength: [100, 'The title length must be at most 40 characters!'],
        minlength: [2, 'The title length must be at least 2 characters!'],
    },
},
{ timestamps: true },
);
const User = mongoose.model('Product', ProductSchema);

module.exports = User;
