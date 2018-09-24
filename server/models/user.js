const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  }, 
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});















//'UserSchema.methods' is an object, on this object we can add any 
//method we like

UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();  

  return _.pick(userObject, ['_id','email']);
}

//we can also override a method, to update exactly how mongoose handles
//certain things

UserSchema.methods.generateAuthToken = function () {
  //using regular old function instead of arrow function, since arrow
  //function doesn't bind 'this' keyword
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(), access}, 'abc123');
  
  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });

}

var User = mongoose.model('User', UserSchema );


module.exports = {User}
