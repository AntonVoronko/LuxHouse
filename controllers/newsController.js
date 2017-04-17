var mysql = require('mysql');
var config = require('../config');
var async = require('async');

var photos = require('./photosService');


var connection = mysql.createConnection({
    host: config.host,
    user: config.mysql_user,
    password: config.mysql_password,
    database: config.database,
    port: config.port
  }
);

module.exports = {
  getNews: function (callback) {
    var query = 'SELECT ' + [
      'n.id',
      'n.text',
      'n.title',
      'n.date',
      'p.name '
    ].join(', ') + 'FROM news AS n LEFT JOIN photos AS p ON n.main_photo = p.id ;'
    connection.query(query, function (err, rows) {
      if (!err) {
        console.log(rows);
        callback(null, { news: rows });
      }
      else {
        callback(err);
        console.log('error');
        console.log(err);
      }
    })
  },
  getSingleNews: function (id, callback) {
    connection.query('SELECT * FROM news WHERE id = ' + id + ';', function (err, rows, fields) {
      if (!err) {
        callback(null, { news: rows[0] });
      }
      else {
        callback(error);
        console.log(err);
      }
    })
  },
  addNews: function (news, callback) {
    var query = 'INSERT INTO news(title, text, date) VALUES (' + [
      '"' + news.title + '",',
      '"' + news.text + '",',
      '"' + news.date + '"'
    ].join('') + ');'
    connection.query(query, function (err, rows) {
        if (!err) {              
          callback (null, 'Your news added successfully');
        } else {
          callback(err);
        }
    })
  },
  updateNews: function (id, news, callback) {
    var query = 'UPDATE news SET ' + [
      news.date? 'date = "' + news.date + '", ' : '',
      news.title? 'title = "' + news.title + '", ': '',
      news.text? 'text = "'+ news.text + '", ' : '',
      news.mainPhoto? 'main_photo = "' + news.mainPhoto + '"' : ''
    ].join('') + ' WHERE id = ' + id + ';'
    connection.query(query, function (err, rows) {
    if (!err) {
      callback(null, 'news update');
    }
    else {
      console.log(err);
      callback('news is not update');
    }
  });
  },

  deleteNews: function (id, callback) {
    connection.query('DELETE FROM news WHERE id =' + id + ';', function (err, rows) {
      if (!err) {
        callback(null, 'new deleted');
      }
      else {
        console.log(err);
        callback('new is not delete');
      }
    });
  }

};