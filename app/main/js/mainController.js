require('jquery');
require('../../carousel');

module.exports = mainController;

function mainController () {

	setTimeout(function () {
		$('.owl-carousel').owlCarousel({
			items : 3, //10 items above 1000px browser width
        	itemsDesktop : [992,2], //5 items between 1000px and 901px
            itemsDesktopSmall : [992,1], // betweem 900px and 601px
            itemsTablet: [768,1], //2 items between 600 and 0
            itemsMobile : false
        }); // itemsMobile disabled - inherit from itemsTablet option);
	}, 2000);

};

mainController.$inject = [];