angular.module('quoteBook').controller('mainCtrl',function($scope,dataService) {
  $scope.quotes = dataService.getData();
  $scope.filter = false;
  $scope.mainMenu = true;
  $scope.inputNew = false;
  $scope.delToggle = false;


  $scope.filterToggle = function () {

    if (!$scope.filter) {
      $scope.filter = true;
      $scope.mainMenu = false;
    } else {
      $scope.filter = false;
      $scope.mainMenu = true;
    }
  }

  $scope.addQuote = function (text, author) {
    if (text === -1 && !author) {
      $scope.mainMenu = true;
      $scope.inputNew = false;
    } else if (text === -2 && !author) {
      $scope.mainMenu = false;
      $scope.inputNew = true;
    } else {
      var success= dataService.addData({text:text,author:author});
      if (success === -1) {
        alert('A new quote needs both text and an author!')
      }
      $scope.quotes = dataService.getData();
    }
  }

    $scope.removeQuote = function (text) {
      dataService.removeData(text);
      $scope.quotes = dataService.getData();
    }

    $scope.removeToggle = function () {
      console.log('Do it!');
      if ($scope.delToggle) {
        $scope.delToggle = false;
        console.log($scope.delToggle);
      } else {
        $scope.delToggle = true;
      }
    }
})
