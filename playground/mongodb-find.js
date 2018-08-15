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
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b72d91d5cb4bb088f0c9752')
    // }).toArray().then((docs) => {
    //     console.log('List of todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);

    // });
    /**
     * Calling find is only the first step, find returned a mongodb cursor, this cursor is 
     * not actually document itself, its actually a pointer to those documents, the cursore
     * has tons of methods, we can call one of those methods to get documents.
     * 'toArray' give array of documents, toArray returns a promise  
     */
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b72d91d5cb4bb088f0c9752')
    // }).toArray().then((docs) => {
    //     console.log('List of todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);

    // });
    /////////////////////////////////////////////////////////
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);

    // });

    db.collection('Users').find({name: 'Andrew Maeed' }).toArray().then((docs) => {
        console.log('List of todos with the name property = Andrew Maeed');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {
        console.log('Unable to fetch docs', err);

    });

    



   

    

    //client.close();// closes the connection with mongodbserver
} );

