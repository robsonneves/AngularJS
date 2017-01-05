angular.module('myApp').controller('ctrlDois', function($scope, appFactory){

	appFactory.store('ctrlDois', $scope);

	$scope.teste = 'Controller ctrlDois';

	$scope.clickAqui =  function(){
		alert('ok controller Dois');
	}

	$scope.clickTeste = function(){
		appFactory.get('ctrlUm').clickTeste();
	}

});