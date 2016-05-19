$(function(){

  var self = this;
  // self.addName = addName;
  // self.removeName = removeName;

  var nameCollections = new NameCollections();
  var i = 0;
  //initialize NameListView with element given, model as nameCollections.
  var nameList = new NameListView({collection: nameCollections});
  //
  // function addName(){
  //   var input = $('#name').val();
  //   var name = new Name({name: input, id: ++i});
  //   nameCollections.push(name);
  //   console.log(nameCollections);
  // }
  //
  // function removeName(id){
  //   nameCollections.remove(id);
  //   console.log('deleted');
  // }
  var formView = new FormView();
});
