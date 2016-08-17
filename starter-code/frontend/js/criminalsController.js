console.log("criminalsController.js");
angular.module('CriminalsApp')
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ["$http"];

function CriminalsController($http){
  var self = this;
  self.newCriminal={};
  self.addCriminal = addCriminal;
  self.deleteCriminal = deleteCriminal;

  function getCriminals() {
  	$http.get('http://localhost:3000/criminals')
  		.then(function(response) {
  			self.all=response.data.criminals;
  			console.log(response);
  		});
  	console.log("in getCriminals");
  }

  function addCriminal() {
  	console.log('in addCriminal');
  	$http.post('http://localhost:3000/criminals',self.newCriminal)
  		.then(function(response) {
  			getCriminals();
  		});
  }

  function deleteCriminal(criminalID) {
  	console.log('in deleteCriminal '+criminalID);
  	$http.delete('http://localhost:3000/criminals/'+criminalID)
  		.then(function(response) {
  			getCriminals();
  		});
  }

  getCriminals();
}