angular.module('appRoute').config(function ($routeProvider) {
    $routeProvider.
    when("/home", {
        templateUrl: "view/home.html",
        controller: "homeCtrl"
    }).
    when("/contato", {
        templateUrl: "view/contato.html",
        controller: "contatoCtrl"
    }).
    when("/teste/:idDoc", {
        templateUrl: "view/teste.html",
        controller: "testeCtrl"
    });
    
});