define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!account/AccountList.html',
  'account/AccountCollection',
  'account/AccountModel'
], function($, _, Backbone, AccountList, AccountCollection, Account){

  var AccountView = Backbone.View.extend({
    el: '#container',
    initialize: function(){
      this.render();
    },
    render: function() {

      console.log("I am rendering");

      var account1 = new Account({id:'2',name:'Boon Kiat',nric:'1234567890'});
      var account2 = new Account({id:'3',name:'Woon Chee',nric:'0987654321'});

      var accountCollection = new AccountCollection();
      accountCollection.add(account1);
      accountCollection.add(account2);

      accountCollection.each(function(Account){
       console.log("****"+Account.get('name'));
      });

      console.log("****"+accountCollection.toJSON);

      var template = _.template(AccountList);
      var html = template({items:accountCollection.models});
      this.$el.html(html);
    }
  });


  return AccountView;
});
