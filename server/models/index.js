var db = require('../db');
require('manakin').global;

module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      // Contact database
      // Read from database
      // Return all messages
      console.info('You are in GET messages inside models/index.js');

      var queryString = 'SELECT messages.id, messages.message, messages.roomname, users.username \
                         FROM messages LEFT OUTER JOIN users on (messages.userid = users.id) \
                         ORDER BY messages.id DESC';
      db.query(queryString, function(err, results) {
        if (err) { throw err; }
        callback(err, results);
      });

    },

    post: function (params, callback) { // a function which can be used to insert a message into the database
      // Contact database
      // Save data to database
      console.info('You are in POST messages inside models/index.js');

      var queryString = "INSERT INTO messages(message, userid, roomname) \
                         VALUES (?, (SELECT id FROM users WHERE \
                         username = ? limit 1), ?)";
      db.query(queryString, params, function(err, results) {
        if (err) { throw err; }
        callback(err, results);
      });

    }
  },

  users: {
    // Ditto as above.
    get: function (callback) { // a function which produces all the users
      // Contact database
      // Read from database
      // Return all users
      console.info('You are in GET users inside models/index.js');

      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        if (err) { throw err; }
        callback(err, results);
      });
    },

    post: function (param, callback) { // a function which can be used to insert a user into the database
      // Contact database
      // Save data to database
      console.info('You are in POST users inside models/index.js');

      var queryString = "INSERT INTO users(username) VALUES (?)";
      db.query(queryString, param, function(err, results) {
        if (err) { throw err; }
        callback(err, results);
      });
    }
  }
};

