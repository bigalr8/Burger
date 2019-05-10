//= Database connection configuration =====================
//Connect to database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
});

module.exports (connection);