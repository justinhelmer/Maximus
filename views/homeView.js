define([
  'libs/backbone'
], function(Backbone) {
  return Backbone.View.extend({
    el: $('#main_container'),

    render: function () {
      this.$el.html('<a href="/foo/bar/baz">Go To My Page</a>');
    }
  });
});
