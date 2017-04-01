module.exports = imgController;

function imgController ($window, Upload, imgService, newsService, feedbackService, worksService) {
	var vm = this;

    this.showAPi = function (type) {
        this.catalog = type;
    };


    this.showTab = function (index) {
        this.newsTabs = index;
    };

    this.news = {
        title: '',
        text: '',
        date: new Date()
    };

    vm.submit = function () { //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
        newsService.addNews(this.news).$promise.then(
            function(data) {
                console.log(data);
            },
            function(err) {
                console.log(err);
            }
        );


    };
        vm.upload = function (file) {
            Upload.upload({
                url: 'http://localhost:3000/api/news', //webAPI exposed to upload the file
                data:{file:file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){ //validate success
                    $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                } else {
                    $window.alert('an error occured');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
                $window.alert('Error status: ' + resp.status);
            }, function (evt) { 
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            });
        };
};


imgController.$inject = ['$window', 'Upload', 'imgService', 'newsService', 'feedbackService', 'worksService'];