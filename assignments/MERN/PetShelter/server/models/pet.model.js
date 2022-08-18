const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator'); 

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Your pet needs a name!'], 
            minlength: [3, 'Name must be at least 3 characters long!'], 
            unique: [true, "Your pet's name must be unique!!"]
        }, 
        type: {
            type: String, 
            required: [true, 'Pet type is required!'], 
            minlength: [3, 'Pet type must be at least 3 characters long!']
        }, 
        description: {
            type: String, 
            required: [true, 'Pet description is required!'], 
            minlength: [3, 'Pet description must be at least 3 characters long!']
        }, 
        skill1: {
            type: String
        }, 
        skill2: {
            type: String
        }, 
        skill3: {
            type: String
        }, 
        like: {
            type: Boolean, 
            default: false,
        }
    }, 
    { timestamps: true}

); 

PetSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique, {VALUE} is already taken.' });
const Pet = mongoose.model('Pet', PetSchema); 

module.exports = Pet; 