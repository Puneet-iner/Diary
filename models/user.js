const mongoose = require('mongoose');

//used for file upload
const path = require('path');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
      type: String,
      required: true  
    },
    life:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Life'
    }
}, {
    timeStamps: true //used for getting the the time at which user updated or created 
});

const User = mongoose.model('User', userSchema);

module.exports = User;