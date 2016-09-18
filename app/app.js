require('angular');
require('angular-ui-router');
require('angular-resource');

var indexController = require('./index/js/indexController');
var mainController = require('./main/js/mainController');
var aboutUsController = require('./about-us/js/aboutUsController');
var contactController = require('./contact/js/contactController');
var newController = require('./new/js/newController');
var feedbackController = require('./feedback/js/feedbackController');

var ourWorksController = require('./our-works/js/ourWorksController');
var galleryController = require('./gallery/js/galleryController');

var app = angular.module('app', ['ui.router', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/public/main");
  $stateProvider
    .state('index', {
      url: '/public',
      templateUrl: 'index/start.html',
      controller: indexController,
      controllerAs: 'ctrl'
    })

    .state('index.main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: mainController,
      controllerAs: 'ctrl'
    })
    .state('index.about-us', {
      url: '/about-us',
      templateUrl: 'about-us/about-us.html',
      controller: aboutUsController,
      controllerAs: 'ctrl'
    })
    .state('index.contact', {
      url: '/contact',
      templateUrl: 'contact/contact.html',
      controller: contactController,
      controllerAs: 'ctrl'
    })
    .state('index.news', {
      url: '/news',
      templateUrl: 'new/new.html',
      controller: newController,
      controllerAs: 'ctrl'
    })
    .state('index.feedback', {
      url: '/feedback',
      templateUrl: 'feedback/feedback.html',
      controller: feedbackController,
      controllerAs: 'ctrl'
    })
    .state('index.our-works', {
      url: '/our-works',
      templateUrl: 'our-works/our-works.html',
      controller: ourWorksController,
      controllerAs: 'ctrl'
    })
    .state('index.new-full', {
      url: '/new-full',
      templateUrl: 'our-works/new-full.html',
      controller: ourWorksController,
      controllerAs: 'ctrl'
    })
    // .state('gallery', {
    //   url: '/gallery',
    //   templateUrl: 'gallery/gallery.html',
    //   controller: galleryController,
    //   controllerAs: 'ctrl'
    // })
  //   .directive('ngSticky', function($window) {
  //   return function($scope, element) {
  //     var  start,
  //          $win = element($window);

  //     $win.on('scroll', function() {

  //       var scroll = $win.scrollTop();

  //       start = start || element.offset().top;

  //       if (scroll > start) {
  //         element.addClass('stuck');
  //       } else {
  //         element.removeClass('stuck');
  //       }
  //     });

  //     $win.on('resize', function recheckPositions() {
  //       element.width( element.parent().width() );
  //     });

  //   };
  // });
  //css для этой директивы
//   .stuck {
//   position: fixed;
//   top: 0;
// }
  // if(window.history && window.history.pushState){
  //     $locationProvider.html5Mode(true);
  //   }
})
.controller('indexController', [indexController])
.controller('mainController', [mainController])
.controller('aboutUsController', [aboutUsController])
.controller('contactController', [contactController])
.controller('newController', [newController])
.controller('feedbackController', [feedbackController])
.controller('ourWorksController', [ourWorksController])
.controller('galleryController', [galleryController]);