module.exports = newsService;

function newsService ($resource) {

  var resource = $resource('/api/news', {}, {
  	addNews: {
  		method: 'POST',
  		params: {
  			title: '@title',
  			text: '@text',
  			date: '@date',
        file: '@file'
  		},
  		headers: {
  			'Content-Type': 'application/form-data'
  		}
  	}
  });

  var resourceId = $resource('/api/news/:news_id', {news_id: '@id'});

  this.getNews = function () {
  	return resource.get();
  };

  this.getNewsId = function (id) {
  	return resourceId.get({ news_id: id });
  }

  this.addNews = function (option) {
  	return resource.addNews({
  	  title: option.title,
  	  text: option.text,
  	  date: option.date,
      file: option.file
  	});
  };

  return this;
};

newsService.$inject = ['$resource'];