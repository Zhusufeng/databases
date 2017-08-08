var models = require('../models');
require('manakin').global;

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // Use models - call it for database data
      console.log('You are in GET messages inside controllers/index.js');

      models.messages.get(function(err, results) {
        if (err) { throw err; }
        res.json(results); // send back as JSON data thru Express
      }); // may need promise since async code

    },

    post: function (req, res) { // a function which handles posting a message to the database
      // Use models - send incoming data to models to write to database
      console.log('You are in POST messages inside controllers/index.js');

      // MySQL takes in array
      var params = [ req.body[message], req.body[username], req.body[roomname] ];
      models.messages.post(params, function(err, results) {
        if (err) { throw err; }
        // res.json(results);
        res.sendStatus(201);
      }); // may need promise since async code
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) { // a function which handles a get request for all users
      // Use models
      console.log('You are in GET users inside controllers/index.js');

      models.users.get(function(err, results) {
        if (err) { throw err; }
        res.json(results); // send back as JSON data thru Express
      }); // may need promise since async code
    },

    post: function (req, res) { // a function which handles posting a user to the database
      console.log('You are in POST users inside controllers/index.js');
      // Use models

      // MySQL takes in array
      var params = [ req.body[username] ];
      models.users.post(params, function(err, results) {
        if (err) { throw err; }
        // res.json(results);
        res.sendStatus(201);
      }); // may need promise since async code
    }
  }
};

