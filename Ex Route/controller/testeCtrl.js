angular.module('appRoute').controller('testeCtrl', function ($scope, $routeParams) {

    $scope.msg = "Aqui quem manda é a controller Teste ";
    
    //Pegar parametro da url
    $scope.idDoc = $routeParams.idDoc;
    var idDoc = $routeParams.idDoc;

});
