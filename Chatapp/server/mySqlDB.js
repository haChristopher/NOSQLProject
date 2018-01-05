/*requiring mysql node modules */
var mysql = require("mysql");

var method = db.prototype;

function db() {
    /*
    	creating MySql database connection
	*/
	var con = mysql.createPool({
		host : 'localhost',
		  user : 'root',
		  port: '1521',
	  	password : 'qq11ww22!!!',
			database : 'chat'
	});
	this.connection=con;

	// Database setup
	con.query("CREATE TABLE IF NOT EXISTS user (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,username VARCHAR(50),password TEXT,reg_date TIMESTAMP)", function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});

}
method.getcon = function() {
	return this;
};

module.exports = db;
