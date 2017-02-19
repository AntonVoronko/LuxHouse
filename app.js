var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var viewRoute = require('./router/views');
var apiRoute = require('./router/api');
var app = express();
var about = express.Router();

 app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', function (err, html) {
    res.send(html);
  });
});

var test = function () {
  var feedback = require('./controllers/feedbackController');
  var result = feedback.updateFeedback(3,
    { name: 'Vita', text: 'Hello' },
    function (err, result) {
      
  });
};  

test();
app.route('/api/feedbacks')
  .get(function (req, res, next) {
    var feedbacks = require('./controllers/feedbackController');
    var result = feedbacks.getFeedbacks(function (err, result) {
      res.json(result);
    });
  })
  .post(function (req, res, next) {
    // console.log(req.query);
    var feedbacks = require('./controllers/feedbackController');
    var result = feedbacks.addFeedback(req.query, function (err, result) {
      res.json(result);
    });
  });

app.route('/api/feedback/:feedback')
  .put(function (req, res, next) {
    console.log(req);
    var feedbacks = require('./controllers/feedbackController');
    var result = feedbacks.updateFeedback(function (err, result) {
      res.json(result);
    });
  })
  .delete(function (req, res, next) {
    console.log(req);
    var feedbacks = require('./controllers/feedbackController');
    var result = feedbacks.deleteFeedback(function (err, result) {
      res.json(result);
  })

  


app.listen(3000);