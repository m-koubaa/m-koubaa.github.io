todoApp.controller("ExamsCtrl", function ($scope) {
    $scope.todo = model;
    $scope.IsEmpty=true;
    $scope.IsNotFound=false;
    $scope.result={ items : [] };
    $scope.addNewItem = function (actionText) {
        //$scope.todo.items.push({ action: actionText, done: false });
      }

      $scope.selectExams = function (id) {
                $scope.result.items=[];
                $scope.IsEmpty=true;
                $scope.IsNotFound=true;

                angular.forEach($scope.todo.items, function(value, key){
                      if(value.id===id){
                            $scope.result.items.push(value);
                            $scope.IsEmpty=false;
                          $scope.IsNotFound=false; }
                });
      }
});
