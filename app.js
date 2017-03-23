var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var viewRoute = require('./router/views');
var apiRoute = require('./router/api');
var passport = require('passport');

var app = express();
var about = express.Router();

var news = require('./controllers/newsController');
var feedbacks = require('./controllers/feedbackController');
var works = require('./controllers/worksController');
var auth = require('./controllers/authorizationController');

 app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', function (err, html) {
    res.send(html);
  });
});

app.route('/api/news')
  .get(function (req, res) {
    var result = news.getNews(function (err, result) {
      console.log(result);
      res.json(result);
    });
  })
  .post(function (req, res) {
    var result = news.addNews(req.query, function (err, result) {
      res.json(result);
    });
  });

app.route('/api/news/:id')
  .get(function (req, res) {
    var result = news.getSingleNews(req.params.id, function (err, result) {
      res.json(result);
    });
  })
  .put(function (req, res) {
    var result = news.updateNews(req.params.id, req.query, function (err, result) {
      res.json(result);
    });
  })
  .delete(function (req, res) {
    var result = news.deleteNews(req.params.id, function (err, result) {
      res.json(result);
    })
  });


app.route('/api/feedbacks')
  .get(function (req, res) {
    var result = feedbacks.getFeedbacks(req.query, function (err, result) {
      res.json(result);
    });
  })
  .post(function (req, res) {
    var result = feedbacks.addFeedback(req.query, function (err, result) {
      res.json(result);
    });
  });

app.route('/api/feedback/:id')
  .put(function (req, res) {
    var result = feedbacks.updateFeedback(req.params.id, req.query, function (err, result) {
      res.json(result);
    });
  })
  .delete(function (req, res) {
    var result = feedbacks.deleteFeedback(req.params.id, function (err, result) {
      res.json(result);
    })
  });

app.route('/api/works')
  .get(function (req, res) {
    var result = works.getWorks(req.query, function (err, result) {
      res.json(result);
    });
  })
  .post(function (req, res) {
    var result = works.addWorks(req.query, function (err, result) {
      res.json(result);
    });
  });

app.route('/api/works/:id')
  .put(function (req, res) {
    var result = works.updateWorks(req.params.id, req.quer, function (err, result) {
      res.json(result);
    });
  })
  .delete(function (req, res) {
    var result = works.deleteWorks(req.params.id, function (err, result) {
      res.json(result);
    })
  });

  app.route('/api/login')
  .post(function (req, res) {
    var result = auth.addUser(req.query, function(err, result) {
      res.json(result);
    });
  });


app.listen(3000);