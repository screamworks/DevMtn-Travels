angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {


$scope.packages = mainSrv.packageInfo;
$scope.test = 'working'

});
