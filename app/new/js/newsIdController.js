module.exports = newsIdController;


function newsIdController ($state, $stateParams, newsService) {
	var self = this;
  var newsId = $stateParams.id;

  this.getNews = function () {
  	newsService.getNewsId(newsId).$promise.then(
  	  function (data) {
  	  	self.news = data.news;
  	  },
  	  function (error) {
  	  	console.log(error);
  	  }
  	);
  };
  this.getNews();

};

newsIdController.$inject = ['$state', '$stateParams', 'newsService'];