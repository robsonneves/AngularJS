angular.module('myApp').controller('ctrlUm', function ($scope, appFactory){
	
	appFactory.store('ctrlUm', $scope);

	$scope.clickTeste = function(){
		appFactory.get('ctrlDois').clickAqui();
	}
	
	$scope.teste = "controller ctrlUm";

});