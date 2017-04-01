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
  connection.query('SELECT * FROM news;', function (err, rows, fields) {
    if (!err) {
      callback(null, { news: rows });
    }
    else {
      console.log('error');
      console.log(err);
    }
  })
  },
  getSingleNews: function (id, callback) {
  connection.query('SELECT * FROM news, photos WHERE id = ' + id + ';', function (err, rows, fields) {
    if (!err) {
      callback(null, { news: rows[0] });
      console.log(rows[0]);

    }
    else {
      console.log('error');
      console.log(err);
    }
  })
  },
  addNews: function (news, imgName, callback) {
    console.log('imgName');
    console.log(imgName);
    connection.query('INSERT INTO news(title, text) VALUES ("' + news.title + '", "' + news.text + '");', 
      function (err, rows) {
        if (!err) {
          photos.addPhoto(imgName, 'news', rows.insertId, function(err, res) {
            if (!err) {
              callback (null, 'Your news added successfully');
            } else {
              callback(err);
            }
          })
        } else {
          callback('Your news is not added');
        }
      }
    )
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