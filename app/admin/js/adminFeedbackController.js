module.exports = adminFeedbackController;

function adminFeedbackController (feedbackService, adminService) {
	var self = this;
	this.dataFeedback = {};

	this.showTab = function (index) {
		this.tabs = index;
		if (index==2)
			this.getFeedbacks();
	};

	this.getFeedbacks = function () {
		feedbackService.getFeedback().$promise.then(
			function (data) {
				self.feedbacks = data.feedback;
			},
			function (err) {
				console.log(err)
			}
		)
	}

	this.deleteFeedback = function (id) {
		feedbackService.deleteFeedback(id).$promise.then(
			function (data) {
				self.getFeedbacks();
			},
			function (err) {
				console.log(err);
			}
		);
	};

	this.openChangeFeedback = function (fb) {
		this.tabs = 3;
		this.dataFeedback = fb;
	};

	this.updateFeedback = function (id) {
		this.dataFeedback.text = this.textChange;
		feedbackService.updateFeedback(this.dataFeedback).$promise.then(
			function (data) {
				alert(data.message);
			},
			function (err) {
				console.log(err);
			}
		);
	};

}

adminFeedbackController.$injector = ['feedbackService', 'adminService'];