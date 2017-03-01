define([

], function(){
	var HomeView = Backbone.View.extend({
		el: $('#main_container'),

		render: function(){
			this.$el.append('<a href="#page">Go To Page</a>');

		}
	});

	return HomeView;
})