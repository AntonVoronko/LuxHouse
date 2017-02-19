angular.module('ngSticky',[])
  .directive('ngSticky', function ($window) {
    return function ($scope, element) {
      var  start = 0;
      var scroll = 0;
      angular.element($window).on('scroll', function() {
        scroll = $window.scrollY;
        if (scroll < start || scroll < 100) {
          element.addClass('stuck')}
        else {
          element.removeClass('stuck');
        }
        start = $window.scrollY;
      });
    };
  });