const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b87c605d809970a18c0c090';

// if(!ObjectId.isValid(id)) {
//     console.log('Id is not valid');
// }


// Todo.find({_id: id}).then((todos) => {
//     console.log('Todos', todos);

// });

// Todo.findOne({_id:id}).then((todo) => {
//     console.log('Todo', todo);

// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!');
//     }

//     console.log('Todo by Id', todo);

// }).catch((e) => console.log(e));

User.findById('5b7d536af7fd430f14c58491').then((user) => {
    if(!user) {
        return console.log('Id is invalid');
    }
    
    console.log('User ', user);
}).catch((e) => {
    console.log('Error', e);
});