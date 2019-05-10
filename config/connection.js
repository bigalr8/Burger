//= Database connection configuration =====================
var dotenv = require('dotenv').config();
var mysql = require("mysql");
//Connect to database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
});


// Make connection.
connection.connect(function(err) {
	if (err) {
	  console.error("error connecting: " + err.stack);
	  return;
	}
	console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;