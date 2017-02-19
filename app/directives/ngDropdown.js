angular.module('ngDropdown',[])
  .directive('ngDropdown', function () {
    jQuery('.dropdown_menu').css('display', 'none');
  	return function () {
      jQuery('body').on('click', function (event) {
        if (event.target.attributes.hasOwnProperty('ng-dropdown'))
  		 	  jQuery('.dropdown_menu').css('display', 'block')
        else
          jQuery('.dropdown_menu').css('display', 'none');
  		});
  	}
  });