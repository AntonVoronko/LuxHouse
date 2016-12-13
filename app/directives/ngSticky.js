angular.module('ngSticky',[])
  .directive('ngSticky', function($window) {
    return function($scope, element) {
      var  start,
           $win = element($window);

      $win.on('scroll', function() {

        var scroll = $win.scrollTop();

        start = start || element.offset().top;

        if (scroll > start) {
          element.addClass('stuck');
        } else {
          element.removeClass('stuck');
        }
      });
    };
  });