define([
  'jquery',
  'underscore',
  'backbone',
  'reactdom',
  'react',
  'account/AccountView',
  'name/react-form-view',
  'name/name-collection',
  'name/name-model',
  'components/common/HeaderBar',
  'components/common/HeaderBarContent',
  'components/common/FooterBar',
  'components/common/FooterBarContent',
  'components/forms/FormView',
  'components/forms/FormItem',
  'components/layout/ListView',
  'components/layout/ListItem'
], function($, _, Backbone, ReactDOM, React, AccountView, ReactFormView, NameList, Name, HeaderBar, HeaderBarContent, FooterBar, FooterBarContent, FormView, FormItem,
      ListView, ListItem){

  var nameList = new NameList();

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'showDefault',
      'add': 'showAddForm',
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
        React.createElement(FormView, {collection: nameList}),
        document.getElementById('form-view')
      );
    },

    showEditForm: function(cid){
      console.log(cid);
    },

    showDefault: function(){
      nameList.push(new Name({name: 'Boon Kiat'}));
      nameList.push(new Name({name: 'Woon Chee'}));
      console.log('default');
      ReactDOM.render(
        React.createElement(HeaderBar, {header: 'FSM Social', button: {one: "Default", two: "Add"}}),
        document.getElementById('nav-header')
      );
      ReactDOM.render(
        React.createElement(ListView, {collection: nameList}),
        document.getElementById('list-view')
      );
      ReactDOM.render(
        React.createElement(FooterBar, {header: 'FSM Social', button: {one: "Home", two: "Track", three: "Social", four: "Trade", five: "MyFSM"}}),
        document.getElementById('nav-footer')
      );
      nameList.push(new Name({name: 'Qian Cheng'}));
      console.log(nameList);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    app_router.on('route:showAccount', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var accountView = new AccountView();
      accountView.render();
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
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
