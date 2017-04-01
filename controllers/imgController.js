var multer = require('multer');

module.exports = function (req, res, callback) {

	var nameImg = '';

    var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, './uploads/')
	  },
	  filename: function (req, file, cb) {
	    var datetimestamp = Date.now();
	    nameImg = file.fieldname + '-' + datetimestamp + '.' + file.originalname
	    	.split('.')[file.originalname
	    	.split('.').length -1];
	    cb(null, nameImg);
	  }
	});

	var upload = multer({
	  storage: storage
	}).single('file');

	upload(req, res, function (err) {
	    if (err) {
	      //res.json({ error_code: 1, err_desc: err });
	      callback('error dont load img');
	      return;
	    }
	    callback(null, nameImg);
	    //res.json({error_code:0,err_desc:null});

  	})
};

