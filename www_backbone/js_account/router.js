define([
  'jquery',
  'underscore',
  'backbone',
  'account/AccountView'
], function($, _, Backbone, AccountView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'account': 'showAccount',
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:showAccount', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var accountView = new AccountView();
      accountView.render();
    });
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
