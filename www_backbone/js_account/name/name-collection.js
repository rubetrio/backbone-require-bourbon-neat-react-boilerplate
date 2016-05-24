define([
  'jquery',
  'backbone',
  'underscore',
  'name/name-model'
], function($, Backbone, _, Name){
  var NameList = Backbone.Collection.extend({
    model: Name,

    removeName: function(){
      return this.Name.destroy();
    }
  });

  return NameList;
});
