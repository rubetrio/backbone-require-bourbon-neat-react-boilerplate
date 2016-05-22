var AccountCollection = Backbone.Collection.extend({
  model: Account
});

var accountCollection = new AccountCollection();

var account1 = new Account('1','Boon Kiat','1234567890');
accountCollection.add(account1);

var account2 = new Account('2','Woon Chee','0987654321');
accountCollection.add(account2);
