require('jquery');
require('owl.carousel');

module.exports = mainController;

function mainController () {
	setTimeout(function(){
		$('.owl-carousel').owlCarousel();
	}, 2000);
};
mainController.$inject = [];