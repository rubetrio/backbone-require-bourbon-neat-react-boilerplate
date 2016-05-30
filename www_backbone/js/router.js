define([
  'jquery',
  'underscore',
  'backbone',
  'reactdom',
  'react',
  'account/AccountView',
  'name/name-collection',
  'name/name-model',
  'components/templates/ListTemplate',
  'components/templates/FormTemplate'
], function($, _, Backbone, ReactDOM, React, AccountView, NameList, Name, ListTemplate, FormTemplate){

  var nameList = new NameList();

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'showListView',
      'add': 'showAddForm',
      'list': 'showListView',
      // Define some URL routes
      'account': 'showAccount',
      // Default
      'addSample': 'showAddForm',
      'editSample/:cid': 'showEditForm',
      '*actions': 'defaultAction'
    },

    showAddForm: function(){
      console.log('add Form');
      // var nameList = new NameList();
      // ReactDOM.render(React.createElement(ReactFormView, {nameList: nameList}), document.getElementById('menu'));
      ReactDOM.render(
        React.createElement(FormTemplate, {
          collection: nameList,
          header: 'Add Name',
          buttons: {
            header:{},
            footer:{
              one: 'Home',
              two: 'Track',
              three: 'Social',
              four: 'Trade',
              five: 'MyFSM'
            }
          }
        }),
        document.getElementById('react-view')
      );
    },

    showEditForm: function(cid){
      console.log(cid);
    },

    showListView: function(){
      console.log('default');
      // ReactDOM.render(
      //   React.createElement(HeaderBar, {header: 'FSM Social', button: {one: "Default", two: "Add"}}),
      //   document.getElementById('nav-header')
      // );
      // ReactDOM.render(
      //   React.createElement(ListView, {collection: nameList}),
      //   document.getElementById('list-view')
      // );
      // ReactDOM.render(
      //   React.createElement(FooterBar, {header: 'FSM Social', button: {one: "Home", two: "Track", three: "Social", four: "Trade", five: "MyFSM"}}),
      //   document.getElementById('nav-footer')
      // );
      // nameList.push(new Name({name: 'Boon Kiat'}));
      // nameList.push(new Name({name: 'Woon Chee'}));
      // nameList.push(new Name({name: 'Wern Sheng'}));
      ReactDOM.render(
        React.createElement(ListTemplate, {
          collection: nameList,
          header: 'FSM Social',
          buttons: {
            header: {
              one: 'Default',
              two: 'Add'
            },
            footer: {
              one: 'Home',
              two: 'Track',
              three: 'Social',
              four: 'Trade',
              five: 'MyFSM'
            }
          }
        }),
        document.getElementById('react-view')
      );
      // nameList.push(new Name({name: 'Qian Cheng'}));
      // nameList.push(new Name({name: 'Woody'}));
      // nameList.push(new Name({name: 'Kelvin'}));
      console.log(nameList);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    app_router.on('route:showAccount', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var accountView = new AccountView();
    });
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    app_router.on('showAddForm', function(){
      console.log('to add form');
    });
    app_router.on('showEditForm', function(cid){
      console.log('to edit ' + cid);
    });
    app_router.on('route:list', function(){
      console.log("i came to list");
    });
    app_router.on('route:add', function(){
      console.log("i came to add");
    });
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
