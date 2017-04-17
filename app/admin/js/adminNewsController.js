var config = require('../../../config');

module.exports = adminNewsController;

function adminNewsController ($window, Upload, newsService, adminService) {
	var self = this;

	this.showTab = function (index) {
        this.newsTabs = index;
        if (index ==2)
            this.getNews();
    };

	this.news = {
        title: '',
        text: '',
        date: new Date()
    };

    this.newId = {
        title: '',
        text: ''
    };


	this.getNews = function () {
        newsService.getNews().$promise.then(
            function (data) {
                self.news = data.news;
            },
            function (err) {
                console.log(err);
            });
    };

    this.deleteNew = function (id) {
        newsService.deleteNew(id).$promise.then(
            function (data) {
                self.getNews();
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.getNew = function (id) {
        newsService.getNewsId(id).$promise.then(
            function (data) {
                self.newsTabs = 3;
                self.newId = data.news;
            },
            function (err) {
                console.log(err);
            }
        ); 
    };

    this.addNews = function () {
        newsService.addNews(this.news).$promise.then(
            function (data) {
                alert(data.message);
                self.newId = {
                    title: '',
                    text: ''
                };
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.saveChangeNew = function () {
        newsService.updateNew(this.newId).$promise.then(
            function (data) {
                alert(data.message);
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.chooseMainPhoto = function (id) {
    	newsService.updateNew({
    		mainPhoto: id,
    		id: this.newIdForMainPhoto
    	}).$promise.then(
            function (data) {
                alert(data.message);
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.getPhotos = function (news, type) {
    	this.newIdForMainPhoto = news.id;
    	this.dataOneNews = news;
        this.newsTabs = 4;
        this.relatedId = news.id;
        this.typePhoto = type;
        adminService.getPhotos(news.id, type).$promise.then(
            function (data) {
                self.photos = data.photos;
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.deletePhoto = function (photo, index) {
       adminService.deletePhoto(photo).$promise.then(
       function (data) {
            self.photos[index] = {};
       },
       function (err) {
            console.log(err);
       }) 
    };

    this.submit = function () {
    //function to call on form submit
        if (self.upload_form.file.$valid && self.file) { //check if from is valid
            self.upload(self.file); //call upload function
        }
    };

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
}

adminNewsController.$injector = ['$window', 'Upload', 'newsService', 'adminService'];