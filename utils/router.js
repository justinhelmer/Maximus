define([
  'libs/backbone',
  'views/homeView',
  'views/myView'
], function (Backbone, HomeView, MyView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'foo/bar/baz': 'mypage',
      '*path': 'home'
    }
  });

  return {
    initialize: initialize
  };

  function initialize() {
    var router = new AppRouter();

    router.on('route:home', function () {
      var homeView = new HomeView();
      homeView.render();
    });

    router.on('route:mypage', function () {
      var myView = new MyView();
      myView.render();
    });

    Backbone.history.start({ pushState: true });
  }
});
