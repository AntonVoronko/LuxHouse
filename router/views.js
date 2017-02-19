var express = require('express');

module.exports = ViewsRoute;
function ViewsRoute () {
    
    var viewsRoute = express.Router();

    viewsRoute.get('/', function(req, res) {
        res.render('index');
    });
    viewsRoute.get('/about-us', function(req, res) {
        res.render('index');
    });
    viewsRoute.get('/contact', function(req, res) {
        res.render('index');
    });
    viewsRoute.get('/news', function(req, res) {
        res.render('index');
    });
    viewsRoute.get('/', function(req, res) {
        res.render('index');
    });
    viewsRoute.get('/', function(req, res) {
        res.render('index');
    });

    return viewsRoute;
};