define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Account = Backbone.Model.extend({
    defaults: {
      id: '1',
      name: 'Qian Cheng',
      nric: '820903075809'
    }
  });

  return Account;
});
