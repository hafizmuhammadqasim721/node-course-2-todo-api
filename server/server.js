const {ObjectId} = require('mongodb');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res ) => {
  Todo.find().then((todos) => {
    res.send({todos});
  
  }, (e) => {
    res.status(400).send();

  })
});

//GET /todos/123
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  
  if(!ObjectId.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(404).send();
  })

})

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  
  if(!ObjectId.isValid(id)) {
    res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    
    if(!todo) {
      res.status(404).send();
    }
    
    res.send({todo});
  }).catch((e) => {
    res.status(404).send(e);
  })

});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  /**
   * - Someone can send any property along, that are not in the Todo
   * items, or those properties can be sent that we don't want to update
   * eg. 'completedAt' is going to be a property that gets updated, but 
   * its not gona updated by user
   * 
   */
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectId.isValid(id)) {
    res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    /**
     * - 'gettime' function returns javascript timestamp, this is number
     * of miliseconds since midnight on Jan 1st 1970, 
     * its just a regular number, value greater than 0 are miliseconds 
     * from that moment forward. Value less then 0 are in the past
     */
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set: body},{new:true}).then((todo) => {
    if(!todo) {
      res.status(404).send();
    }
    
    res.sendStatus({todo});
  }).catch((e) => {
    res.status(404).send();
  });
});

/***********************USER ROUTES*********************/

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    //here we need to send token back as 'http response header'
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
