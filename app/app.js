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
var serviceBuildingController = require('./services/js/serviceBuildingController'); 
var serviceRepairController = require('./services/js/serviceRepairController'); 
var serviceDesignController = require('./services/js/serviceDesignController'); 

var ngSticky = require('./directives/ngSticky');

var app = angular.module('app', ['ui.router', 'ngResource', 'ngSticky'])

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
      url: '/new',
      templateUrl: 'new/new-full.html',
      controller: ourWorksController,
      controllerAs: 'ctrl'
    })
    .state('index.service-building', {
      url: '/service-building',
      templateUrl: 'services/service-building.html',
      controller: serviceBuildingController,
      controllerAs: 'ctrl'
    })
    .state('index.service-repair', {
      url: '/service-repair',
      templateUrl: 'services/service-repair.html',
      controller: serviceRepairController,
      controllerAs: 'ctrl'
    })
    .state('index.service-design', {
      url: '/service-design',
      templateUrl: 'services/service-design.html',
      controller: serviceDesignController,
      controllerAs: 'ctrl'
    })
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
.controller('galleryController', [galleryController])
.controller('serviceBuildingController', [serviceBuildingController])
.controller('serviceRepairController', [serviceRepairController])
.controller('serviceDesignController', [serviceDesignController]);
