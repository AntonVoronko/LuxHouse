module.exports = adminWorkController;

function adminWorkController (worksService, adminService) {
	var self = this;
	this.showTab = function (index) {
		this.workTabs = index;
		if (index == 2) 
			this.getProjects('build');
	}

	this.addProject = function () {
		worksService.addWork(this.project).$promise.then(
			function (data) {
				alert(data.message);
				self.project = undefined;
			},
			function (err) {
				console.log(err);
			}
		);
	}

	this.getProjects = function (type) {
		this.type = type
		worksService.getWorks(type).$promise.then(
			function (data) {
				self.works = data.works;
			},
			function (err) {
				console.log(err);
			}
		);
	}

	this.getWork = function (id) {
		this.workTabs = 3;
		worksService.getWork(id).$promise.then(
			function (data) {
				self.work = data.works;
			},
			function (err) {
				console.log(err);
			}
		);
	}

	this.deleteWork = function (id) {
		worksService.deleteWork(id).$promise.then(
			function (data) {
				alert(data.message);
				self.getProjects(self.type);
			},
			function (err) {
				console.log (err);
			}
		);
	}

	this.updateWork = function () {
		worksService.updateWork(this.work).$promise.then(
			function (data) {
				alert(data.message);
			},
			function (err) {
				console.log (err);
			}
		);
	}

	this.upload = function (file) {
        Upload.upload({
            url: config.url + '/api/photos', //webAPI exposed to upload the file
            data:{
            	file: file,
            	type: this.typePhoto,
        	    id: this.relatedId
    	    } //pass file as data, should be user ng-model
        })
        setTimeout(function () {
            self.getPhotos(self.dataOneNews, self.typePhoto);
        }, 3000);
    };

    this.getPhotos = function (poject, type) {
    	this.workIdForMainPhoto = poject.id;
    	this.dataOneNews = poject;
        this.workTabs = 4;
        this.relatedId = poject.id;
        this.typePhoto = type;
        adminService.getPhotos(poject.id, type).$promise.then(
            function (data) {
                self.photos = data.photos;
            },
            function (err) {
                console.log(err);
            }
        );
    }

}

adminWorkController.$injector = ['worksService', 'adminService'];