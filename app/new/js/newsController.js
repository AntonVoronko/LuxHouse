module.exports = newsController;

function newsController (newsService) {
	var self = this;

  this.getNews = function () {
  	newsService.getNews().$promise.then(
  	  function (data) {
  	  	self.news = data.news;
  	  	console.log(data);
  	  },
  	  function (error) {
  	  	console.log(error);
  	  }
  	);
  };
  this.getNews();

};
newsController.$inject = ['newsService'];