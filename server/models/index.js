var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) { // a function which produces all the messages
      // Contact database
      // Read from database
      // Return all messages
      console.log('You are in GET messages inside models/index.js');
      db.query('', function() {});
      response.writeHead(200);
      response.end('You have exited the GET messages inside models/index.js');
    },
    post: function (req, res) { // a function which can be used to insert a message into the database
      // Contact database
      // Save data to database
      console.log('You are in POST messages inside models/index.js');

      var body = '';

      request.on('data', function(chunk) {
        body += chunk;
      });

      db.query('INSERT INTO ', , function(err, result) {
        if (err) { throw err; }

        request.on('end', function() {
          console.log(body.toString());
          data.results.push(body); // This should be where you write to the database!
          response.writeHead(201);
          response.end('You have exited the POST messages inside models/index.js');
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () { // a function which produces all the users
      // Contact database
      // Read from database
      // Return all users

    },
    post: function () { // a function which can be used to insert a user into the database
      // Contact database
      // Save data to database
    }
  }
};

