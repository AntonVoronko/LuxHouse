module.exports = imgService;

function imgService ($resource) {
	
	var resource = $resource('api/photos');
	var resource2 = $resource('api/photos/:photo_id',
		{ photo_id: '@id' },
		{
			update: {
				related_id: '@related_id',
				type: '@type',
				name: '@name'
			}
		}
	);

	this.getPhotos = function (id, type) {
		return  resource.get({
			related_id: id,
			type: type
		});
	};

	this.deletePhoto = function (photo) {
		return resource2.delete({ photo_id: photo.id })
	}

	return this;
};

imgService.$inject = ['$resource'];