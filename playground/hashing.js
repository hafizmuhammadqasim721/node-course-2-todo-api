//grabing certain property of the required result
//'SHA256', 256 is a number of bits of resulting hash 
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pass = '123abc';
var hashedPassword = '$2a$10$VdVCSTMdnML7apQvWkRFle3OcR/Otxoafo2iKUr4sCgH520Ce1NyS'
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(pass, salt, (err, hash) => {
//         console.log(hash);
//     })
// })

bcrypt.compare(pass, hashedPassword, (err, res) => {
    console.log(res);
});









//'jwt.sign' takes the object, and signs it, means it creates the hash
//returns the token value
// var data = {
//     id: 10
// }

// var token = jwt.sign(data, '123abc');
// console.log(token);
//only when the token is un-altered and the secret is the same, as the
//one used to create the token 
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);



//var message = "I am user number 3";
//Hashing is a one way algorithm
//var hash = SHA256(message).toString();

//console.log(`message: ${message}`);
//console.log(`Hash: ${hash}`);


