define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var DefaultInfo = Backbone.Model.extend({
    defaults: {
      last: 123,
      change: '+ 0.23',
      volume: 123321,
      high: 333,
      low: 111
    }
  });

  var Name = Backbone.Model.extend({
    defaults: {
      name: null
    },
    initialize: function(){
      this.set('info', new DefaultInfo());
    },
    getName: function(){
      return name;
    }
  });

  return Name;
});
