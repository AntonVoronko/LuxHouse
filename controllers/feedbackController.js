var mysql = require('mysql');

var connection = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'lux_house',
    port: 3306
  }
);

module.exports = {
  getFeedbacks: function (callback) {
	connection.query('SELECT * FROM feedback;', function (err, rows) {
	  if (!err) {
	    callback(null, rows);
	  }
	  else {
	  	console.log('error');
	    console.log(err);
	  }
	})
  },
  addFeedback: function (feedback, callback) {
	connection.query('INSERT INTO feedback(name, text, date)' +
		'VALUES (' + feedback.name + ', ' + feedback.text + ', ' + feedback.date + '));', function (err, rows, fields) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, feedback);
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  updateFeedback: function (id, feedback, callback) {
  	connection.query('UPDATE feedback SET name = "' + feedback.name + 
  		'", text = "'+ feedback.text + '" WHERE id=' + id + ';', function (err, rows) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, feedback);
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  deleteFeedback: function (id, callback) {
  	connection.query('DELETE FROM  feedback WHERE id =' + id + ';', function (err, rows) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, feedback);
	  }
	  else {
	    console.log(err);
	  }
	});
  }

};