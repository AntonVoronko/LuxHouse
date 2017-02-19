var express = require('express')
var app = express();
// var router = express.Router();

module.exports = ApiRouter;
function ApiRouter () {
  'use strict';
 // console.log('33333');
  var router = app.route('/api/feedback')
    .all(function (req, res, next) {
      console.log('kkk');
      // next();
    })
    .get(function (req, res, next) {
      console.log('huh');
      res.json('huh');
    })
    .post(function (req, res, next) {
      console.log('Post-huh');
    });
  // apiRouter.get('/api/feedback/:feedback_id', function (req, res) {
  //   console.log('Hello!');
  //   // connection.connect();
  //   // connection.query('SELECT * FROM clients1', function (err, rows, fields) {
  //   //   if (!err) 
  //   //     console.log('The solution is: ', rows)
  //   //   else 
  //   //     console.log(err);
  //   // });
  //   // connection.end();
  //   var result = { 
  //     users: [
  //       { name: 'Petro', age: 45, messege: 'Hi! I am Petro' },
  //       { name: 'Ivan', age: 60, message: 'Hi! I am Ivan' }
  //     ]
  //   };
  //   res.json(result);
  // });

  // apiRouter.post('api/feedback/:feedback', function (req, res) {
  //   connection.connect();
  //   connection.query(
  //     'INSERT INTO clients1 SET id = 1, name = Petro',
  //     function (err, rows, fields) {
  //       if (!err) 
  //         console.log('The solution is: ', rows)
  //       else 
  //         console.log(err);
  //     }
  //   );
  //   connection.end();
  //     res.send('This is not implemented now');
  // });

  // apiRouter.get('/api/articles/:id', function (req, res) {
  //     res.send('This is not implemented now');
  // });

  // apiRoute.put('/api/articles/:id', function (req, res){
  //     res.send('This is not implemented now');    
  // });

  // apiRoute.delete('/api/articles/:id', function (req, res){
  //     res.send('This is not implemented now');
  // });

  return router;
};