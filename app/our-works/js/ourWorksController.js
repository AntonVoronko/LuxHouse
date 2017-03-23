module.exports = ourWorksController;

function ourWorksController (worksService) {
	var self = this;

	this.limit = 9;
	this.offset = 0;

	this.getWorks = function (worktype) {
		var options = {
			type: worktype,
			limit: this.limit,
			offset: this.offset
		};
		worksService.getWorks(options).$promise.then(
			function (data) {
				self.works = data.works;
			},
			function (err) {
				console.log(err);
			}
		);
	};

	this.getWorks('design');
};

ourWorksController.$inject = ['worksService'];