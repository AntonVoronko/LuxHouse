require('angular');
require('angular-ui-router');
require('angular-resource');

var indexController = require('./index/js/indexController');
var mainController = require('./main/js/mainController');
var aboutUsController = require('./about-us/js/aboutUsController');
var contactController = require('./contact/js/contactController');
var newsController = require('./new/js/newsController');
var feedbackController = require('./feedback/js/feedbackController');
var ourWorksController = require('./our-works/js/ourWorksController');
var galleryController = require('./gallery/js/galleryController');
var serviceBuildingController = require('./services/js/serviceBuildingController'); 
var serviceRepairController = require('./services/js/serviceRepairController'); 
var serviceDesignController = require('./services/js/serviceDesignController'); 

var ngSticky = require('./directives/ngSticky');

var ngDropdown = require('./directives/ngDropdown');

var feedbackService = require('./feedback/js/feedback_service');
var newsService = require('./new/js/news_service');

var app = angular.module('app', ['ngDropdown', 'ui.router', 'ngResource', 'ngSticky'])

.config(
  function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
   if(window.history && window.history.pushState) {
      // $locationProvider.html5Mode(true);
    };
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('index', {
      abstract: true,
      templateUrl: 'index/start.html',
      controller: indexController,
      controllerAs: 'ctrl'
    })
    .state('index.main', {
      url: '/',
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
      controller: newsController,
      controllerAs: 'ctrl'
    })
    .state('index.new', {
      url: '/new/:id',
      templateUrl: 'new/new.html',
      controller: newsController,
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
})

.controller('indexController', [indexController])
.controller('mainController', [mainController])
.controller('aboutUsController', [aboutUsController])
.controller('contactController', [contactController])
.controller('newController', ['newsService', newsController])
.controller('feedbackController', ['feedbackService', feedbackController])
.controller('ourWorksController', [ourWorksController])
.controller('galleryController', [galleryController])
.controller('serviceBuildingController', [serviceBuildingController])
.controller('serviceRepairController', [serviceRepairController])
.controller('serviceDesignController', [serviceDesignController])

.factory('feedbackService', ['$resource', feedbackService])
.factory('newsService', ['$resource', newsService]);