module.exports = CarouselService;

function CarouselService ($resource) {
	
	var resource = $resource('api/photos');

	this.getPhotos = function (id, type) {
		return resource.get({
			related_id: id,
			type: type
		});
	};

	return this;
}

CarouselService.$inject = ['$resource'];