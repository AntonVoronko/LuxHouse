module.exports = indexController;

function indexController () {
	this.showForm = function() {
		this.tumblerform = true;
	};
	this.hideForm = function() {
		this.tumblerform = false;
	};

	this.showNav = function() {
		if(this.tumblerNav)
			this.tumblerNav = false
		else this.tumblerNav = true;
	}
};
indexController.$inject = [];