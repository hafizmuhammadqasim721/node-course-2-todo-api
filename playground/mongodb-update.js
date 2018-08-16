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
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b75243e29f611b710b2cd5d')
    // }, {
    //     $set: {
    //         completed: true
    //     }

    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Noor'
    }, {
        $set: {
            name: 'Qasim'
        }, 
        $inc: {
            age: 10
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });
    



   

    

    //client.close();// closes the connection with mongodbserver
} );

