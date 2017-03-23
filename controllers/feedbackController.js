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
 getFeedbacks: function (query, callback) {
  if (query && query.limit && query.offset) {
    var pagin = 'LIMIT ' + query.limit +' OFFSET ' + query.offset
  } else {
    var pagin = '';}
  connection.query('SELECT * FROM feedback ' + pagin + ';', function (err, rows) {
    if (!err) {
      callback(null, { feedback: rows });
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
      callback(null, { feedback: rows });
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