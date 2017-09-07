angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){

$scope.travelLocation = mainSrv.travelInfo;
});
