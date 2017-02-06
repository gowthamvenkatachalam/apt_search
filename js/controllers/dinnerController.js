angular.module('weddingapp.dinnerController', [])

.controller('DinnerCtrl', function($scope) {
	$scope.images = [];
 
   $scope.imgDesc = [
      "Agra Pan",
      "Hot Jilebi",
      "Heart idly",
      "Naan & Paneer Butter masala",
      "Rava dosai",
      "Podi dosai",
      "Masala dosai",
      "Tomato dosai",
      "Plain dosai",
      "Aapam & Chenna masala",
      "Tomato Sevai",
      "Cutlet and sauce",
      "Curd rice",
      "Baby corn fry",
      "Sambar",
      "Coconut Chutney",
      "Malli Chutney",
      "Kaara Chutney",
      "Badam milk",
      "Jigarthanda",
      "Stick Kulfi",
      "Real orange ice-cream"
  ];

  $scope.loadImages = function() {
      for(var i = 0; i < 22; i++) {
        $scope.images.push({id: i, src: "img/dinner/" + i + ".jpg", desc: $scope.imgDesc[i]});
      }
  };

});
