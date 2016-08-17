angular.module('CriminalsApp')
  .controller('CriminalsController', CriminalsController)
  .factory("Criminals", function($resource) {
    return $resource("http://localhost:3000/criminals/:id");
  });
  CriminalsController.$inject = ["$http","Criminals"];

function CriminalsController($http, Criminals){
  var self = this;
  self.newCriminal={};
  self.addCriminal = addCriminal;
  self.deleteCriminal = deleteCriminal;

  function getCriminals() {
    console.log(Criminals);
    var temp = Criminals.get(function(response) {
      self.all=response.criminals;
      console.log(response);
    });
  }

  function addCriminal() {
    Criminals.save(self.newCriminal,function(response) {
      getCriminals(); //refresh list on page
    });
  }

  function deleteCriminal(criminalID) {
    console.log("in delete, with an id of "+criminalID);
    Criminals.delete({id: criminalID},function(response) {
      getCriminals(); //refresh list on page
    });
  }

  getCriminals();
}