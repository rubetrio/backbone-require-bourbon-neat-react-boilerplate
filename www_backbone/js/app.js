define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'react',
  'reactdom'
], function($, _, Backbone, Router, React, ReactDOM){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
