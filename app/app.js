require('angular');
require('angular-ui-router');
require('angular-resource');
require('ng-file-upload');

var adminController = require('./admin/js/adminController');
var adminWorkController = require('./admin/js/adminWorkController');
var adminFeedbackController = require('./admin/js/adminFeedbackController');
var adminNewsController = require('./admin/js/adminNewsController');
var indexController = require('./index/js/indexController');
var mainController = require('./main/js/mainController');
var aboutUsController = require('./about-us/js/aboutUsController');
var contactController = require('./contact/js/contactController');
var newsController = require('./new/js/newsController');
var newsIdController = require('./new/js/newsIdController');
var feedbackController = require('./feedback/js/feedbackController');
var ourWorksController = require('./our-works/js/ourWorksController');
var galleryController = require('./gallery/js/galleryController');
var carouselController = require('./carousel/js/carouselController');

var serviceBuildingController = require('./services/js/serviceBuildingController'); 
var serviceRepairController = require('./services/js/serviceRepairController'); 
var serviceDesignController = require('./services/js/serviceDesignController'); 

var ngSticky = require('./directives/ngSticky');

var ngDropdown = require('./directives/ngDropdown');

var adminService = require('./admin/js/admin_service');
var feedbackService = require('./feedback/js/feedback_service');
var newsService = require('./new/js/news_service');
var worksService = require('./our-works/js/works_service');
var corouselService = require('./carousel/js/carousel_service');

var app = angular.module('app', ['ngFileUpload', 'ngDropdown', 'ui.router', 'ngResource', 'ngSticky'])

.config(
  function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
   if(window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
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
    .state('index.newFull', {
      url: '/news/:id',
      views: {
        '': {
          templateUrl: 'new/new-full.html',
          controller: newsIdController,
          controllerAs: 'ctrl'
        },
        'carousel@index.newFull': {
          templateUrl: 'carousel/carousel.html',
          controller: carouselController,
          controllerAs: 'ctrl'
        }
      }
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
    .state('index.admin', {
      url: '/admin-page',      
      views: {
        '': {
          templateUrl: 'admin/admin.html',
          controller: adminController,
          controllerAs: 'ctrl'
        },
        'news@index.admin': {
          templateUrl: 'admin/admin-news.html',
          controller: adminNewsController,
          controllerAs: 'ctrl'
        },
        'feedback@index.admin': {
          templateUrl: 'admin/admin-feedback.html',
          controller: adminFeedbackController,
          controllerAs: 'ctrl'
        },
        'project@index.admin': {
          templateUrl: 'admin/admin-project.html',
          controller: adminWorkController,
          controllerAs: 'ctrl'
        }
      }
    })
})

.controller('indexController', [indexController])
.controller('mainController', ['worksService', mainController])
.controller('aboutUsController', [aboutUsController])
.controller('contactController', [contactController])
.controller('newsController', ['newsService', newsController])
.controller('newsIdController', ['newsService', newsIdController])
.controller('feedbackController', ['feedbackService', feedbackController])
.controller('ourWorksController', ['worksService', ourWorksController])
.controller('galleryController', [galleryController])
.controller('serviceBuildingController', [serviceBuildingController])
.controller('serviceRepairController', [serviceRepairController])
.controller('serviceDesignController', [serviceDesignController])
.controller('carouselController', ['corouselService', carouselController])
.controller('adminController', ['adminService', 'newsService', 'feedbackService', 'worksService', adminController])
.controller('adminNewsController', ['adminService', 'newsService', adminNewsController])
.controller('adminFeedbackController', ['adminService', 'feedbackService', adminFeedbackController])
.controller('adminWorkController', ['adminService', 'worksService', adminWorkController])

.factory('adminService', ['$resource', adminService])
.factory('feedbackService', ['$resource', feedbackService])
.factory('newsService', ['$resource', newsService])
.factory('worksService', ['$resource', worksService])
.factory('corouselService', ['$resource', corouselService]);