const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
    // _id is auto generated ObjectID the type is mongoose.Schema.Types.ObjectId
    title: {
        type: String,
        required: [true, 'A movie title is required!!!'],
        maxlength: [40, 'The title length must be at most 40 characters!'],
        minlength: [2, 'The title length must be at least 2 characters!'],
    },
    genre: {
        type: String,
        required: [true, 'A genre is required'],
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Family',
            'Animated',
            'Documentary',
            'Romcom',
            'Silent Movie',
            'Thriller',
            'Crime Noir',
            'French Cinema',
            'Horror/Comedy',
            'Kung-Fu'
        ],
    },
    boxArt: {
        type: String,
        required: [true, 'Movie picture is Required'],
    },
    duration: {
        type: String,
        default: 'N/A',
    },
    rating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-17'],
        required: [true, 'A movie rating is required!!'],
    },
    actors: {
        type: [String],
    },
    isKidFriendly: {
        type: Boolean,
        default: false,
    },
    releaseYear: {
        type: Number,
        min: [1920, 'Thats too old'],
    },
    },
    { timestamps: true },
);

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;

//need to export so that we can use it in our frontend 