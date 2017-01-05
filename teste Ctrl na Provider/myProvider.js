angular.module('myApp')
.provider('myProvider', function(){

	this.$get = function(){

		return{

			provider: function(){
				var provider = 'provider';
				return provider;
			}

		};

	}


});