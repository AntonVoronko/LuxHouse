module.exports = newsService;

function newsService ($resource) {

  var resource = $resource('/api/news');
  var resourceId = $resource('/api/news/:news_id', {news_id: '@id'});

  this.getNews = function () {
  	return resource.get();
  };

  this.getNewsId = function (id) {
  	return resourceId.get({ news_id: id });
  }

  return this;
};

newsService.$inject = ['$resource'];