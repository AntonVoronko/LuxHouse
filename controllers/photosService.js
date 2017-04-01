var mysql = require('mysql');
var config = require('../config');


var connection = mysql.createConnection({
    host: config.host,
    user: config.mysql_user,
    password: config.mysql_password,
    database: config.database,
    port: config.port
  }
);

module.exports = {
	addPhoto: function (name, type, id, callback) {
		connection.query('INSERT INTO photos (name, type, related_id) VALUE ("' + name + '", "' + type + '", ' + id + ');',
			function (err, res) {
				if(!err) {
					callback(null, res);
				} else {
					callback('Your photo name is not added');
				}
			});
	}
};
