module.exports = imgController;

function imgController ($window, Upload, imgService, newsService, feedbackService, worksService) {
	var vm = this;

    this.showAPi = function (type) {
        this.catalog = type;
    };


    this.showTab = function (index) {
        this.newsTabs = index;
        if (index ==2)
            this.getNews();
    };

    this.getNews = function () {
        newsService.getNews().$promise.then(
            function (data) {
                vm.news = data.news;
            },
            function (err) {
                console.log(err);
            });
    };

    this.changePhotoNew = function (id) {
        // newsService.
    }

    this.deleteNew = function (id) {
        newsService.deleteNew(id).$promise.then(
            function (data) {
                vm.getNews();
            },
            function (err) {
                console.log(err);
            }
        );
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

    this.getNew = function (id) {
        newsService.getNewsId(id).$promise.then(
            function (data) {
                vm.newsTabs = 3;
                vm.newId = data.news;
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
                vm.newId = {
                    title: '',
                    text: ''
                };
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.getPhotos = function (id, type) {
        this.newsTabs = 4;
        this.relatedId = id;
        this.typePhoto = type;
        imgService.getPhotos(id, type).$promise.then(
            function (data) {
                vm.photos = data.photos;
            },
            function (err) {
                console.log(err);
            }
        );
    };

    this.deletePhoto = function (photo, index) {
       imgService.deletePhoto(photo).$promise.then(
       function (data) {
            vm.photos[index] = {};
       },
       function (err) {
            console.log(err);
       }) 
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

    vm.submit = function () {
    //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    };
        vm.upload = function (file) {
            Upload.upload({
                url: 'http://localhost:3000/api/photos', //webAPI exposed to upload the file
                data:{
                   file: file,
                   type: this.typePhoto,
                   id: this.relatedId
                } //pass file as data, should be user ng-model
            })
            setTimeout(function () {
                vm.getPhotos(vm.relatedId, vm.typePhoto);
            }, 3000);
                //.then(function (resp) { //upload function returns a promise
            //     if(resp.data.error_code === 0){ //validate success
            //         $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            //     } else {
            //         $window.alert('an error occured');
            //     }
            // }, function (resp) { //catch error
            //     console.log('Error status: ' + resp.status);
            //     $window.alert('Error status: ' + resp.status);
            // }, function (evt) { 
            //     console.log(evt);
            //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            //     vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            // });
        };
};


imgController.$inject = ['$window', 'Upload', 'imgService', 'newsService', 'feedbackService', 'worksService'];