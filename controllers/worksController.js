var mysql = require('mysql');
var config = require('../config');
var bunyan = require('bunyan');

var connection = mysql.createConnection({
    host: config.host,
    user: config.mysql_user,
    password: config.mysql_password,
    database: config.database,
    port: config.port
  }
);
console.log(config);

module.exports = {
  getWorks: function (query, callback) {
  // if (query && query.limit && query.offset) {
  //   var pagin = 'LIMIT ' + query.limit +' OFFSET ' + query.offset
  // } else {
  //   var pagin = '';}
  if (query.type) {
  	var pagin = 'WHERE worktype = "' + query.type + '"';
  }
  // console.log('SELECT * FROM works ' + pagin + ';');
  connection.query('SELECT * FROM works ' + pagin + ' LIMIT ' + query.limit +' OFFSET ' + query.offset + ';', function (err, rows) {
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
  	var query = 'SELECT * FROM works WHERE id = ' + id + ';';
	connection.query(query, function (err, rows) {
	  if (!err) {
	    callback(null, { works: rows[0] });
	  }
	  else {
	    console.log(err);
	  }
	})
  },
  
  addWorks: function (works, callback) {
	console.log(works);
  	var query = 'INSERT INTO works(' + [
  		'adress', 
  		'area', 
  		'description', 
  		'worktype', 
  		'date'
  		].join(', ') + ') VALUES (' + [
			'"' + works.adress + '"',
			works.area,
			'"' + works.description + '"',
			'"' + works.worktype + '"',
			'"' + works.date + '"'
		].join(', ') + ');';
	console.log(query);
	connection.query(query, function (err, rows) {
	  if (!err) {
	    callback(null, 'Project successfully added');
	  }
	  else {
	    console.log(err);
	  }
	});
  },
  updateWorks: function (id, works, callback) {
  	var query = 'UPDATE works SET ' + [
  		works.adress? 'adress = "' + works.adress + '", ' : '',
  		works.area? 'area = "' + works.area + '", ' : '',
  		works.description? 'description = "' + works.description + '", ' : '',
  		works.worktype? 'worktype = "' + works.worktype + '"' : ''
  	].join('') + ' WHERE id=' + id + ';';
  	console.log(query);
  	connection.query(query, function (err, rows) {
	  if (!err) {
	    callback(null, 'Work successfully updated');
	  }
	  else {
	    callback(err);
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