define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'account/AccountModel'
],function(_,Backbone,Account){

  var AccountCollection = Backbone.Collection.extend({
    model: Account
  });

  return AccountCollection;
});
