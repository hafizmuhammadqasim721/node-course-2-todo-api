/**
 * - the first thing we need to do is to pull something out from mongodb 
 * liaberary that is  'mongoclient', which lets you connect to the mongoserver 
 * and issues commands to manipulate the database
 */
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
MongoClient.connect(url, (err, client) => {
    /**
     * the callback function get fired after the connect will succeeded or failed.
     */
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'something todo',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     // the 'ops' attribute stores all the docs that were inserted
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    

    //insert a new doc into Users{name, age, location}
    
    db.collection('Users').insertOne({
        name: 'Andrew Maeed',
        age: 25,
        location: 'philadelphia'

    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user');
        }

        //console.log(JSON.stringify(result.ops,undefined, 2))
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();// closes the connection with mongodbserver
} );

