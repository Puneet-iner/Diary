const mongoose = require('mongoose');

const lifeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    values: [{
        text:   {
            type : String
        },
        createdAt: {
            type: String,
        }
    }]
}, {
    timeStamps: true //used for getting the the time at which user updated or created 
});

const Life = mongoose.model('Life', lifeSchema);

module.exports = Life;
