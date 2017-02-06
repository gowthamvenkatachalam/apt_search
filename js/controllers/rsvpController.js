angular.module('weddingapp.rsvpController', [])

.controller('RsvpCtrl', function($scope, $firebaseArray, $ionicPopup) {

    var ref = new Firebase("https://gsweddingapp.firebaseio.com/rsvp");
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  
  // $scope.removeMess = ref.remove();
  
   $scope.addMessage = function(name,response,email,no,mess) {
          $scope.messages.$add({
            Name: name,
            Response: response,
            Email: email,
            Number: no,
            Message: mess
          });
          //RESET MESSAGE
          $scope.msg = "";
        };

  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.messages.length; i++){
        var product = $scope.messages[i].Number;
        total += (product);
    }
    return total;
  }
  
  $scope.rowCollection = [];

    // for (var id=0; id < $scope.messages.length; id++) {
        $scope.rowCollection.push($scope.messages);
    // }

    console.log($scope.rowCollection[0]);

   $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Success!',
     template: 'See you at the wedding!'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };

});
