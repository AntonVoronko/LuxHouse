module.exports = feedbackService;

function feedbackService ($resource) {

  var resource = $resource('/api/feedback/:feedback_id',
    { feedback_id: '@feedback' },
    {
	    addFeedback: {
		    method: 'POST',
		    params: {
		      id: '@feedbackId',
          name: '@name',
          text: '@text',
          date: '@date'
		    }
	    },
      update: {
	  	  metod: 'PATCH',
	  	  params: {
	  	    id: '@id',
	  	    name: '@name'
	  	  }
	    }
	  }
  );
  var resource2 = $resource('/api/feedbacks',
  {},
  {
    addFb: {
      metod: 'POST',
      params: {
        id: '@feedbackId',
        name: '@name',
        text: '@text',
        date: '@date'
      }
    }
  });


  this.getFeedback = function () {
  	return resource2.get();
  };

  this.addFeedback = function (feedback) {
    return resource.addFeedback({
      id: feedback.id,
      name: feedback.name,
      text: feedback.text,
      date: feedback.date
    });
  };

  this.updateFeedback = function (option) {
  	return resource.update({
  	  feedback_id: option.id,
  	  name: option.name
  	});
  };

  this.deleteFeedback = function (id) {
  	return resource.delete({ feedback_id: id });
  };

  return this;
};

feedbackService.$inject = ['$resource'];