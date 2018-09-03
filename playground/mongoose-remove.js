const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//mongoose provides 3 methods for deleting records

//lets you delete multiple records
// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// 
/**
 * 'findOneAndRemove' work exactly the same as 'findByIdAndRemove', only
 * it takes the query object 
 * get docs back that got removed
 */
Todo.findOneAndRemove({}).then((todo) => {
    console.log(todo);
})


// Todo.findByIdAndRemove('5b8cd5574d7d395b40e16c9d').then((todo) => {
//     console.log(todo);
// })