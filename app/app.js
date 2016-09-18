require('angular');
require('angular-ui-router');
require('angular-resource');

var mainController = require('./main/js/mainController');
var aboutUsController = require('./about-us/js/aboutUsController');
var contactController = require('./contact/js/contactController');
var newController = require('./new/js/newController');
var feedbackController = require('./feedback/js/feedbackController');

var ourWorksController = require('./our-works/js/ourWorksController');
var galleryController = require('./gallery/js/galleryController');

var app = angular.module('app', ['ui.router', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/main");
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: mainController,
      controllerAs: 'ctrl'
    })
    .state('about-us', {
      url: '/about-us',
      templateUrl: 'about-us/about-us.html',
      controller: aboutUsController,
      controllerAs: 'ctrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact/contact.html',
      controller: contactController,
      controllerAs: 'ctrl'
    })
    .state('new', {
      url: '/new',
      templateUrl: 'new/new.html',
      controller: newController,
      controllerAs: 'ctrl'
    })
    .state('feedback', {
      url: '/feedback',
      templateUrl: 'feedback/feedback.html',
      controller: feedbackController,
      controllerAs: 'ctrl'
    })
    .state('our-works', {
      url: '/our-works',
      templateUrl: 'our-works/our-works.html',
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
.controller('mainController', [ mainController])
.controller('aboutUsController', [aboutUsController])
.controller('contactController', [contactController])
.controller('newController', [newController])
.controller('feedbackController', [feedbackController])
.controller('ourWorksController', [ourWorksController])
.controller('galleryController', [galleryController]);