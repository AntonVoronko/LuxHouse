module.exports = newsService;

function newsService ($resource) {

  var resource = $resource('/api/news', {}, {
  	addNews: {
  		method: 'POST',
  		params: {
  			title: '@title',
  			text: '@text',
  			date: '@date'
  		},
  		headers: {
  			'Content-Type': 'application/form-data'
  		}
  	}
  });

  var resourceId = $resource('/api/news/:news_id',
    {news_id: '@id'},
    {
       update: { 
          method: 'PUT',
          params: {
            text: '@text',
            title: '@title',
            date: '@date',
            mainPhoto: '@mainPhoto'
          }
        }
    }
  );

  this.getNews = function () {
  	return resource.get();
  };

  this.getNewsId = function (id) {
  	return resourceId.get({ news_id: id });
  };

  this.addNews = function (option) {
  	return resource.addNews({
  	  title: option.title,
  	  text: option.text,
  	  date: new Date()
  	});
  };

  this.deleteNew = function (id) {
    return resourceId.delete({ news_id: id });
  };

  this.updateNew = function (news) {
    return resourceId.update(
      { news_id: news.id },
      {
        title: news.title,
        text: news.text,
        date: news.date? new Date(news.date): undefined,
        mainPhoto: news.mainPhoto
      }
    )
  }

  return this;
};

newsService.$inject = ['$resource'];