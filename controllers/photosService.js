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
	getPhotos: function (news,callback) {
		connection.query('SELECT * FROM photos WHERE type ="' + news.type + '" AND related_id = "' + news.related_id + '";', function (err, rows) {
			if (!err)
				callback(null, rows)
			else 
				callback(err);	
		});
	},
	addPhoto: function (name, type, id, callback) {
		var query  = 'INSERT INTO photos (name, type, related_id) VALUE ("' +
			name + '", "' + type + '", ' + id + ');';
		connection.query(query,
			function (err, res) {
				if(!err) {
					console.log('ok');
					callback(null, res);
				} else {
					console.log(err);
					callback('Your photo name is not add');
				}
			});
	},
	deletePhoto: function (id, callback) {
		var query = 'DELETE FROM photos WHERE id =' + id + ';'
		connection.query(query, function (err, rows) {
		    if (!err) {
		      callback(null, 'photo deleted');
		    }
		    else {
		      console.log(err);
		      callback('photo is not delete');
		    }
  		});
	} 
};
