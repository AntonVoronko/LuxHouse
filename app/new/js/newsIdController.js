module.exports = newsIdController;

function newsIdController (newsService, $state, $stateParams) {
	var self = this;

  this.getNews = function () {
  	newsService.getNewsId($stateParams.id).$promise.then(
  	  function (data) {
  	  	self.news = data.news;
        console.log(self.news);
  	  },
  	  function (error) {
  	  	console.log(error);
  	  }
  	);
  };
  this.getNews();

};
newsIdController.$inject = ['newsService', '$state', '$stateParams'];