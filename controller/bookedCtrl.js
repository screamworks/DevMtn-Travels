angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
console.log($stateParams)
for(var i = 0; i < mainSrv.packageInfo.length; i++){
if(mainSrv.packageInfo[i].id == $stateParams.id){
   $scope.cool = mainSrv.packageInfo[i]
}
 mainSrv.packageInfo

};
})
