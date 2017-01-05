angular.module('myApp').factory('appFactory', function($rootScope){

	var mem = {};

	return {
		
		store: function(key, value){
			mem[key] = value;
		},
		get: function(key){
			return mem[key];
		}

	};

});