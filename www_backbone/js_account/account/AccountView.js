define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!account/AccountList.html',
  'AccountCollection'
], function($, _, Backbone, AccountList,AccountCollection){

  var AccountView = Backbone.View.extend({
    el: '#container',
    initialize: function(){
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(AccountList);
      this.$el.html(compiledTemplate);
    }
  });

  return AccountView;
});
