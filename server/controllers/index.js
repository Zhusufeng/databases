var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // Use models
      // Read Data from database.
      // Send back all messages through messages in controllers/index.js!
      // Stringify it (?)
      console.log('You are in GET messages inside controllers/index.js');
      response.writeHead(200);
      response.end('You have exited the GET messages inside controllers/index.js');
    },
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('You are in POST messages inside controllers/index.js');
      // Use models
      // Read incoming data
      // Write it to the database
      // Send back what was written
      // Stringify it (?)
      var body = '';

      request.on('data', function(chunk) {
        body += chunk;
      });

      request.on('end', function() {
        console.log(body.toString());
        data.results.push(body); // This should be where you write to the database!
        response.writeHead(201);
        response.end('You have exited the POST messages inside controllers/index.js');
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) { // a function which handles a get request for all users
      // Use models
      // Read Data from database.
      // Send back all messages through messages in controllers/index.js!
      // Stringify it (?)
      console.log('You are in GET users inside controllers/index.js');
      response.writeHead(200);
      response.end('You have exited the GET users inside controllers/index.js');
    },
    post: function (req, res) { // a function which handles posting a user to the database
      console.log('You are in POST users inside controllers/index.js');
      // Use models
      // Read incoming data
      // Write it to the database
      // Send back what was written
      // Stringify it (?)
      var body = '';

      request.on('data', function(chunk) {
        body += chunk;
      });

      request.on('end', function() {
        console.log(body.toString());
        data.results.push(body); // This should be where you write to the database!
        response.writeHead(201);
        response.end('You have exited the POST users inside controllers/index.js');
      });
    }
  }
};

