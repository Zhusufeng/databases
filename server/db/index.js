var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'root', // put in the password
  database: 'chat'
});

dbConnection.connect();

module.exports = dbConnection;

// exports.db = mysql.createConnection({
//   user: 'root',
//   password: 'root', // put in the password
//   database: 'chat'
// });
// exports.db.connect(function(err) {
//   if (err) { throw err; }
//   console.log('We are connected to the Database chat!');
// });
