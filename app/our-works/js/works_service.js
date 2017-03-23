module.exports = worksService;

function worksService ($resource) {

  var resource = $resource('/api/works/:work_id');
  var resource2 = $resource('/api/works');


  this.getWorks = function (works) {
  	return resource2.get({
  		type: works.type,
  		limit: works.limit,
  		offset: works.offset
  	});
  };

  this.addWork = function (work) {
    return resource.addWork({
      id: work.id,
      name: work.name,
      text: work.text,
      date: work.date
    });
  };

  this.updateWork = function (option) {
  	return resource.update({
  	  work_id: option.id,
  	  name: option.name
  	});
  };

  this.deleteWork = function (id) {
  	return resource.delete({ work_id: id });
  };

  return this;
};

worksService.$inject = ['$resource'];