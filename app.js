var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var viewRoute = require('./router/views');
var apiRoute = require('./router/api');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var AsyncRouter = require("express-async-router").AsyncRouter;

var app = express();
var router = AsyncRouter();
var about = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'app',
  src: true,
  level: 'trace'
});

var news = require('./controllers/newsController');
var feedbacks = require('./controllers/feedbackController');
var works = require('./controllers/worksController');
var auth = require('./controllers/authorizationController');
var saveImg = require('./controllers/imgController');
var photos = require('./controllers/photosService');

app.use(express.static(__dirname + '/public'));

// var secret = 'vtlkiai-secret';

// app.get('/token', function(req, res) {
//   var data = {
//     user:'vitala',
//     name: 'Vitaliy Tsaruk'
//   };
//   return res.json(jwt.sign(data, secret));
// });

// app.get('/protected',
//   expressJwt({secret}),
//   function (req, res) {
//     return res.json(req.user)
//   }
// );




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
  .post(multipartMiddleware, function (req, res) {
    news.addNews(req.query, function (err, result) {
      if(!err)
        res.json({ message: result })
      else
        res.json({ err: err });
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
      if (!err)
        res.json({ message: result })
      else
        res.json(err)
        ;
    });
  })
  .delete(function (req, res) {
    var result = news.deleteNews(req.params.id, function (err, result) {
      if (!err)
        res.json({ status: 200, message: result })
      else 
        res.json({ status: 500, message: 'error' });
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
      if (!err) 
        res.json({ message: result })
      else res.json(err);
    });
  });

app.route('/api/works/:id')
  .get(function (req, res) {
    works.getSingleWork(req.params.id, function (err, result) {
      if (!err)
        res.json(result)
      else 
        res.json(err);
    });
  })
  .put(function (req, res) {
    works.updateWorks(req.params.id, req.query, function (err, result) {
      if (!err)
        res.json({ message: result })
      else 
        res.json(err);
    });
  })
  .delete(function (req, res) {
    var result = works.deleteWorks(req.params.id, function (err, result) {
      res.json(result);
    })
  });

  app.route('/api/photos')
    .get(function (req, res) {
      photos.getPhotos(req.query, function (err, rows) {
        if (!err)
          res.json({ photos: rows })
        else
          res.json({ message: err });
      })
    })
    .post(multipartMiddleware, function (req, res) {
      saveImg(req, res, function (err, imgName) {
        if (!err) {
          photos.addPhoto(imgName, req.body.type , req.body.id, function(err, result) {
            if (!err) {
              res.json({ message: 'Your news added successfully'});
            } else {
              console.log(err);
              res.json({ message: err });
            }
          })
        }
        else res.json(err);
      });
  });
    
  app.route('/api/photos/:id')
    .delete(function (req, res) {
      photos.deletePhoto(req.params.id, function (err, result) {
        if (!err) {
          res.json({ message: result })
        }
        else {
          res.json({ err: err });
        }
      })
    })

  app.route('/api/login')
  .post(function (req, res) {
    var result = auth.addUser(req.query, function(err, result) {
      res.json(result);
    });
  });

  app.route('/upload/:path')
    .get(function(req, res) {
       res.sendFile(req.params.path);
    })

  app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/index.html');

});


app.listen(3000);