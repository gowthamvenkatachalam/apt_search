angular.module('weddingapp.aptSearchController', [])

.controller('AptSearchCtrl', function($scope, $rootScope, $firebaseArray, $ionicModal) {

    var ref = new Firebase("https://gowtham1stapp.firebaseio.com");
    // create a synchronized array
    $scope.apts = $firebaseArray(ref);

  $scope.columns = [
        { label: 'Name', prop: 'Name', visible: true, type: 'name'},
        { label: 'Address', prop: 'Size', visible: true, type: 'address', sort: 'reverse'},
        { label: 'Phone', prop: 'Phone', visible: true, type: 'phoneNumber', sort: 'reverse'},
        { label: 'Floor Plan', prop: 'flpl', visible: false, type: 'text'},
        // { label: 'Photos', prop: 'pic', visible: false, type: 'pic'},
        /*{ label: 'Expiration date', prop: 'expirationDate', visible: true, type: 'date' },*/
        /*{ label: 'Name', prop: 'name', visible: true, type: 'text' },*/
        { label: "Gow.R", visible: false, type: 'number', prop: 'gowr' },
        { label: 'San.R', visible: false, type: 'number', prop: 'sanr'},
        { label: 'Rent', visible: false, type: 'number', prop: 'rent'}
      ];

  
    // $scope.showColumnCustomization = function() {
    //     var modalScope = $rootScope.$new(true);
    //     modalScope.columns = angular.copy($scope.columns);

    //     var modalInstance = $uibModal.open({
    //       animation: true,
    //       templateUrl: 'templates/customCol.html',
    //       scope: modalScope,
    //       size: 'sm'
    //     });

    //     modalInstance.result.then(function (columns) {
    //       $scope.columns = angular.copy(columns);
    //     });
    //   };

    var modalScope = $rootScope.$new(true);
    modalScope.columns = angular.copy($scope.columns);
    
    var modalInstance = $ionicModal.fromTemplateUrl('templates/customCol.html', {
      scope: modalScope
    });

    modalInstance.then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

$scope.addRow = function(name, address, phone){   

          $scope.apts.$add({
            Name: name,
            Address: address,
            Phone: phone
          });
          //RESET MESSAGE
          $scope.msg = "";        
};

$scope.removeRow = function(app){        
    var index = -1;   
    var comArr = eval( $scope.apts );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].Name === app.Name ) {
        index = i;
        break;
      }
    }
    if( index === -1 ) {
      console.log( "Something gone wrong" );
    }
    $scope.apts.splice( index, 1 );    
  };

})

.filter('phoneNumberFilter', function() {
      return function (tel) {
        if (!tel) { return ''; }

        var regExHyp = new RegExp("-", "g");
        var value = tel.toString().trim().replace(/^\+/, '');
        value = value.replace(regExHyp, '');
        
        if (value.match(/[^0-9]\-/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country === 1) {
            country = "";
        }
        number = number.slice(0, 3) + '-' + number.slice(3);
        if(country === ""){
          return (city + '-' + number).trim();
        }
        else {
          return (country + "-" + city + "-" + number).trim();
        }
    };
});
