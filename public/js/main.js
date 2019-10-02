let calenderApp = angular.module("calender", []);

calenderApp.controller("day", ['$scope', ($scope)=>{

	$scope.days = ["d", "l", "m", "m", "j", "v", "s"];


}])

calenderApp.controller("numberDay", ['$scope', ($scope)=>{

	$scope.numberDays = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
 

}])