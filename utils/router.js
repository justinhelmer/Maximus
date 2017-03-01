define([
	'views/homeView',

], function(HomeView){
	var Approuter = Backbone.Router.extend({
		routes: {
			// Define some URL routes
			'*path': 'home'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();

		app_router.on('route:home', function() {
	        var homeView = new HomeView();
	        homeView.render();
	    });

	    Backbone.history.start({pushState: true});
	};

	return{
		initialize: initialize
	};

})