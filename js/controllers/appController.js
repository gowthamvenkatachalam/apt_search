angular.module('weddingapp.appController', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('GalleryCtrl', function($scope) {
    console.log('I am in the Gallery controller');
})

.controller('OurLoveStoryCtrl', function($scope) {

  console.log('I am in the Our love story controller');

})

.controller('OurLoveStoryPuzzleCtrl', function($scope) {

  console.log('I am in the Our love story puzzle controller');

})

.controller('FriendsAndFamilyCtrl', function($scope) {

  console.log('I am in the Friends and family controller');

})

.controller('RsvpCtrl', function($scope) {

  console.log('I am in the Rsvp controller');

})

.controller('WeddingDetailsCtrl', function($scope) {

  console.log('I am in the Wedding details controller');

})

.controller('TwilioCtrl', function($scope, $http) {
    $scope.phoneNum = '';
    $scope.message = '';
    $scope.smsResponse = {};

    $scope.msgReady = function(){
      var resultValue = false;

      if($scope.phoneNum !== '' && $scope.message !== ''){
        resultValue = true;
      }

      return resultValue;
    };

    $scope.sendSMS = function(){
      var urlString = "phoneNum/"+$scope.phoneNum+"/message/"+$scope.message;
      var promise = $http({
        method: 'GET',
        url: 'http://remote.realtech.io:3100/twilioApi/'+urlString
      }).then(function successCallback(response) {
        $scope.smsResponse.message = response.data;
        $scope.smsResponse.status = response.statusText;
        console.log($scope.smsResponse);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {

        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

      return promise;

    };

    $scope.getMessagesList = function(){
      var urlString = "listMessages";
      var promise = $http({
        method: 'GET',
        url: 'http://remote.realtech.io:3100/twilioApi/'+urlString
      }).then(function successCallback(response) {

        console.log(response);
        console.log(response.data);

        /*$scope.smsResponse.message = response.data;
        $scope.smsResponse.status = response.statusText;*/

      }, function errorCallback(response) {

      });

      return promise;

    };

    $scope.getMessagesFromNumber = function(){
      var urlString = "listMessages";
      var promise = $http({
        method: 'GET',
        url: 'http://remote.realtech.io:3100/twilioApi/'+urlString
      }).then(function successCallback(response) {

        console.log(response);
        console.log(response.data);

        /*$scope.smsResponse.message = response.data;
         $scope.smsResponse.status = response.statusText;*/

      }, function errorCallback(response) {

      });

      return promise;

    };





})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
