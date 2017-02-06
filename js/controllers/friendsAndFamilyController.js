angular.module('weddingapp.friendsAndFamilyController', [])

.controller('FriendsAndFamilyCtrl', function($scope) {
	$scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a);
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };

      $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
      };

      $scope.data = [{
        'id': 1,
        'title': "Together with Friends as Family",
        'nodes': [
    	  {
            'id': 10,
            'title': 'Venkatachalam & Mala Venkatachalam',
            'nodes': []
          },
          {
            'id': 11,
            'title': 'Ganeshen & Radhika Ganeshen',
            'nodes': []
          },
          {
            'id': 12,
            'title': 'Karthikeyan & Kavipriya',
            'nodes': []
          },
          {
            'id': 13,
            'title': 'Athish Krishna Ganeshen',
            'nodes': []
          },
          {
            'id': 16,
            'title': 'Surendran Ravichandran',
            'nodes': []
          },
          {
            'id': 17,
            'title': 'Bharath Subramanian',
            'nodes': []
          },
          {
            'id': 18,
            'title': 'Dharanya Arun',
            'nodes': []
          },
          {
            'id': 22,
            'title': '         ',
            'nodes': []
          },
          {
            'id': 19,
            'title': 'Shanmuga Vadivel & S. Gowri',
            'nodes': []
          },
          {
            'id': 22,
            'title': 'Thalapathy, Usha & Tharun',
            'nodes': []
          },
          {
            'id': 23,
            'title': 'Rajesh, Akila & Akshath',
            'nodes': []
          },
          {
            'id': 20,
            'title': 'Geetha Yuvaraj',
            'nodes': []
          },
          {
            'id': 21,
            'title': 'Ravi Shankar',
            'nodes': []
          }
        ]
      }
      ];

});
