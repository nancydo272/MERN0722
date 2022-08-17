const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
    // _id is auto generated ObjectID the type is mongoose.Schema.Types.ObjectId
    name: {
        type: String,
        required: [true, 'Name is required!!!'],
        minlength: [3, 'The name length must be at least 3 characters!'],
    }
    },
    { timestamps: true },
);

const Author = mongoose.model('Authot', AuthorSchema);

module.exports = Author;