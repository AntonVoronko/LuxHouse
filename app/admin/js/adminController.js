module.exports = imgController;

function imgController ($window, Upload, adminService, newsService, feedbackService, worksService) {
	var vm = this;

    this.showAPi = function (type) {
        this.catalog = type;
    };

};


imgController.$inject = ['$window', 'Upload', 'adminService', 'newsService', 'feedbackService', 'worksService'];