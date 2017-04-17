var multer = require('multer');
var fs = require('fs');

module.exports = function (req, res, callback) {	
  fs.readFile(req.files.file.path, function (err, data) {
  	  var imgName = new Date().getTime(); 
	  var newPath = __dirname.replace(/controllers/,'/public/uploads/') + imgName + '.jpg';
	  fs.writeFile(newPath, data, function (err) {
	  	callback(null, '/uploads/' + imgName + '.jpg');
  });
});

	// var nameImg = '';

 //    var storage = multer.diskStorage({
	//   destination: function (req, file, cb) {
	//     cb(null, './uploads/')
	//   },
	//   filename: function (req, file, cb) {
	//     var datetimestamp = Date.now();
	//     nameImg = file.fieldname + '-' + datetimestamp + '.' + file.originalname
	//     	.split('.')[file.originalname
	//     	.split('.').length -1];

	//     cb(null, nameImg);

	//   }
	// });

	// var upload = multer({
	//   storage: storage
	// }).single('file');

	// upload(req.file, res, function (err) {
	//     if (err) {
	//       //res.json({ error_code: 1, err_desc: err });
	//       callback('error dont load img');
	//       return;
	//     }
	    
	//     callback(null, nameImg);
	//     //res.json({error_code:0,err_desc:null});

 //  	})
};

