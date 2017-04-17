require('jquery');
require('../../carousel');

module.exports = CarouselController;

function CarouselController ($timeout, $state, $stateParams, corouselService) {
	var self = this;
	var id = $stateParams.id;
	var pageName = $state.current.url.split('/')[1];
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
		}, 100)		
	};

	this.getPhotos = function () {
        corouselService.getPhotos(id, pageName).$promise.then(
            function (data) {
                self.photos = data.photos;
                self.carousel();
            },
            function (err) {
                console.log(err);
            }
        );
    };
    this.getPhotos();
	
};

CarouselController.$injector = ['$timeout', '$state', '$stateParams', 'corouselService']; 