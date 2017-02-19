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
  getNews: function (callback) {
	connection.query('SELECT * FROM news;', function (err, rows, fields) {
	  if (!err) {
	    callback(null, rows);
	  }
	  else {
	  	console.log('error');
	    console.log(err);
	  }
	})
  },
  getSingleNews: function (id, callback) {
	connection.query('SELECT * FROM news WHERE id = ' + id + ';', function (err, rows, fields) {
	  if (!err) {
	    callback(null, rows);
	  }
	  else {
	  	console.log('error');
	    console.log(err);
	  }
	})
  },
  addNews: function (news, callback) {
	connection.query('INSERT INTO news(img, title, text, date)' +
		'VALUES (' news.img ', ' + news.title + ', ' + news.text + ', ' + news.date + '));', function (err, rows, fields) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, news);
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  updateNews: function (id, news, callback) {
  	connection.query('UPDATE news SET img = "' + news.img + '", title = "' + news.title + 
  		'", text = "'+ news.text + '" WHERE id = ' + id + ';', function (err, rows) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, news);
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  deleteNews: function (id, callback) {
  	connection.query('DELETE FROM news WHERE id =' + id + ';', function (err, rows) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, news);
	  }
	  else {
	    console.log(err);
	  }
	});
  }

};