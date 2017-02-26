module.exports = feedbackController;

function feedbackController (feedbackService) {

  var self = this;

  this.getFeedback = function () {
  	feedbackService.getFeedback().$promise.then(
  	  function (data) {
        self.feedbacks = data.feedback;
  	  	console.log(data);
  	  },
  	  function (error) {
  	  	console.log(error);
  	  }
  	);
  };
  
  this.getFeedback();

  this.addFeedback = function () {
    feedbackService.addFeedback({
      id: this.feedbackId,
      name: this.name,
      text: this.text,
      date: new Date()
    })
  };
  
};

feedbackController.$inject = ['feedbackService'];