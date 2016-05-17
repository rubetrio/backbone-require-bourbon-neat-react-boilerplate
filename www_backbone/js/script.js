$(function(){

  TestView = Backbone.View.extend({
    initialize: function(){
      console.log('sampleView has been created');
    }
  });

  var testing_view = new TestView({ el: $("#testing_id") });

});
