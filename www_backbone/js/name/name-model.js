define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var Name = Backbone.Model.extend({
    defaults: {
      name: null
    },
    getName: function(){
      return name;
    }
  });

  return Name;
});
