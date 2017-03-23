require('jquery');
require('../../carousel');

module.exports = mainController;

function mainController ($timeout, worksService) {
	var self = this;

	this.limit = 9;
	this.offset = 0;

	this.carousel = function () {
		$timeout(function () {
			$('.owl-carousel').owlCarousel({
				items : 3, //10 items above 1000px browser width
	        	itemsDesktop : [992,2], //5 items between 1000px and 901px
	            itemsDesktopSmall : [992,1], // betweem 900px and 601px
	            itemsTablet: [768,1], //2 items between 600 and 0
	            itemsMobile : false
	        }); // itemsMobile disabled - inherit from itemsTablet option);
		}, 500)		
	};

	this.getWorks = function (worktype) {
		var options = {
			type: worktype,
			limit: this.limit,
			offset: this.offset
		};
		this.showWorks = false;
		worksService.getWorks(options).$promise.then(
			function (data) {
				self.showWorks = true;
				self.works = data.works;
				self.carousel();
			},
			function (err) {
				console.log(err);
			}
		);

	}
	this.getWorks('design');
};

mainController.$inject = ['$timeout', 'worksService'];