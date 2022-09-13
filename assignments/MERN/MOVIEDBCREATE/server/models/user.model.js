const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
    }); 

// this allows us to confirm the pw w/o storing in the DB/ virtual field 
UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value =>this._confirmPassword = value)

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', "Password must match confirmed password!")
    }
    next()
})

//middleware that will hash pw whenever we save
UserSchema.pre('save', async function(next){
    console.log('In pre save', this.password)
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log('Hashed password:' ,hashedPassword)
        this.password= hashedPassword
        next()
    }catch(error){
        console.log('Error in Save', error)
    }
})

const User = mongoose.model('User', UserSchema); 

module.exports = User; 