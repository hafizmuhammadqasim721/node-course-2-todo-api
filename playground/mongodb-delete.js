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
    
    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result)
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({name: 'Andrew Maeed'}).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b72a842b704ed1ba87ef29a')}).then(result => {
        console.log(result);
    });
    



   

    

    //client.close();// closes the connection with mongodbserver
} );

