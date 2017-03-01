define([
	'libs/jquery',
	'libs/underscore',
	'libs/backbone',
	'utils/router'
], function($, _, Backbone, Router){
	var initialize = function(){
		Router.initialize();
	};

	return{
		initialize: initialize
	};

})