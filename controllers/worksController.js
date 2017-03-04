var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'vavava1',
    database: 'lux_house',
    port: 3306
  }
);

module.exports = {
  getWorks: function (callback) {
	connection.query('SELECT * FROM works;', function (err, rows) {
	  if (!err) {
	    callback(null, { works: rows });
	  }
	  else {
	  	console.log('error');
	    console.log(err);
	  }
	})
  },
  getSingleWork: function (id, callback) {
	connection.query('SELECT * FROM works WHERE id = ' + id + ';', function (err, rows, fields) {
	  if (!err) {
	    callback(null, { works: rows[0] });
	  	console.log(rows[0]);

	  }
	  else {
	  	console.log('error');
	    console.log(err);
	  }
	})
  },
  addWorks: function (works, callback) {
	connection.query('INSERT INTO works(img, adress, area, user_id, worktype)' +
		'VALUES (' + [
			works.img, 
			works.adress,
			works.area,
			works.user_id,
			works.worktype
		].join(', ') + ');', function (err, rows, fields) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, { works: rows });
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  updateWorks: function (id, works, callback) {
  	connection.query('UPDATE works SET ' + [
  		'img = "' + works.img,
  		'adress = "' + works.adress,
  		'area = "' + works.area,
  		'user_id = "' + works.user_id,
  		'worktype = "' + works.worktype].join('", ') + '" WHERE id=' + id + ';', function (err, rows) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, works);
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  deleteWorks: function (id, callback) {
  	connection.query('DELETE FROM works WHERE id =' + id + ';', function (err, rows) {
	  if (!err) {
	  	console.log('rows');
	  	console.log(rows);
	    callback(null, rows);
	  }
	  else {
	    console.log(err);
	  }
	});
  }

};