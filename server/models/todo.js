var mongoose = require('mongoose');

//We need to create a model for every thing that we want to store
var Todo = mongoose.model('Todo', {
    //this object defines various properties of the model
    text: {
        type: String,
        required: true,
        minlength: 3,
        trim :true      
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo}