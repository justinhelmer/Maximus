define([
  'libs/backbone'
], function(Backbone) {
  return Backbone.View.extend({
    el: $('#main_container'),

    render: function(){
      this.$el.html('This is my page. <a href="/">Go Home</a>');
    }
  });
});
