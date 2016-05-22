var AccountView = Backbone.View.extend({
  el: '#account-id',
  initialize: function(){
    this.render();
  },
  render: function() {
    this.$el.html('Hello World!');
    return this;
  }
});

var accountView = new AccountView();
