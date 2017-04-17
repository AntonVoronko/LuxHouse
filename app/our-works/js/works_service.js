module.exports = worksService;

function worksService ($resource) {

  var resource = $resource('/api/works/:work_id', {
      work_id: '@work_id' 
  }, 
  { 
    update: {
      method: 'PUT',
      params: {
          adress: '@adress',
          area: '@area',
          description: '@description',
          date: '@date',
          worktype: '@worktype'
      }
    }
  });
  var resource2 = $resource('/api/works', {}, 
    {
      addWork: {
        method: 'POST',
        params: {
          adress: '@adress',
          area: '@area',
          description: '@description',
          date: '@date',
          worktype: '@worktype'
        },
        headers: {
          'Content-Type': 'application/form-data'
        }
      }
    });


  this.getWorks = function (works) {
  	return resource2.get({
  		type: works.type,
  		limit: works.limit || 20,
  		offset: works.offset || 0
  	});
  };

  this.getWork = function (id) {
    return resource.get({ work_id: id })
  }

  this.addWork = function (work) {
    return resource2.addWork({
      adress: work.adress,
      area: work.area,
      description: work.description,
      worktype: work.type,
      date: new Date(),
    });
  };

  this.updateWork = function (option) {
  	return resource.update({
  	  work_id: option.id
    }, 
    {
  	  adress: option.adress,
      area: option.area,
      description: option.description,
      worktype: option.worktype,
      date: option.date
  	});
  };

  this.deleteWork = function (id) {
  	return resource.delete({ work_id: id });
  };

  return this;
};

worksService.$inject = ['$resource'];