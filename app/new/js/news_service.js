module.exports = newsService;

function newsService ($resource) {

  var resource = $resource('/api/news');

  this.getNews = function () {
  	return resource.get();
  };

  return this;
};

newsService.$inject = ['$resource'];