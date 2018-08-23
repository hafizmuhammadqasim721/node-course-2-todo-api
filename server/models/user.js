var mongoose = require('mongoose');

//creat user model
var User = mongoose.model('User', {
    email: {
        type: String, 
        require: true,
        minlength: 13,
        trim: true
    }  
});

module.exports = {User}