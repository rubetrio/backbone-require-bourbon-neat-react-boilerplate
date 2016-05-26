'use strict';

// var require = require('requirejs');
// var React = require('react');
define(['jquery', 'backbone', 'underscore', 'react', 'reactdom', 'name/name-model'], function ($, Backbone, _, React, ReactDOM, Name) {
  Backbone.sync = function (method, model, success, error) {
    success();
  };

  var ReactFormView = React.createClass({
    displayName: 'ReactFormView',

    getInitialState: function getInitialState() {
      return this.props.nameList;
    },
    addName: function addName() {
      var name = new Name({ name: $('#name').val() });
      this.state.push(name);
      console.log(this.state);
      // nameList.push(this.state);
      // console.log((this.state));
      // this.setState({name: ''});
      ReactDOM.render(React.createElement(ReactNameView, { nameList: this.state }), document.getElementById('content'));
    },
    render: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'three' },
          React.createElement('input', { type: 'text', id: 'name', placeholder: 'Insert Your Name' })
        ),
        React.createElement(
          'div',
          { className: 'one' },
          React.createElement(
            'button',
            { type: 'submit', id: 'addName', onClick: this.addName },
            'Add'
          )
        )
      );
    },
    getNameModel: function getNameModel() {
      return this.props;
    }

  });

  var ReactNameView = React.createClass({
    displayName: 'ReactNameView',

    componentDidMount: function componentDidMount() {
      this.props.nameList.on('change remove', function () {
        this.forceUpdate();
      }.bind(this));
    },
    render: function render() {
      var listOfNames = this.props.nameList.map(function (name) {
        console.log(name);
        var removeName = function removeName() {
          console.log('remove');
          name.destroy();
        };

        var editName = function editName() {
          // var cid = {name.cid};
          console.log('edit ');
          ReactDOM.render(React.createElement(ReactEditView, { name: name }), document.getElementById(name.cid));
          // name.set({name: 'Boon Kiat'});
        };
        return React.createElement(
          'div',
          { key: name.cid },
          React.createElement(
            'li',
            null,
            name.get('name')
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'button',
              { id: 'removeName', className: 'two', onClick: removeName },
              'Remove'
            ),
            React.createElement(
              'button',
              { id: 'editName', className: 'two', onClick: editName },
              'Edit'
            )
          ),
          React.createElement('div', { id: name.cid })
        );
      });
      return React.createElement(
        'ul',
        null,
        listOfNames
      );
    }
  });

  var ReactEditView = React.createClass({
    displayName: 'ReactEditView',

    getInitialState: function getInitialState() {
      return this.props.name;
    },
    render: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'text', id: 'edit', className: 'three', value: name }),
        React.createElement(
          'button',
          { id: 'change', className: 'one', onClick: this.editName },
          'Submit'
        )
      );
    },
    editName: function editName() {
      this.state.set({ name: $('#edit').val() });
      ReactDOM.unmountComponentAtNode(document.getElementById(name.cid));
    },
    handleChange: function handleChange(e) {
      console.log(this.state);
    },
    componentWillUnmount: function componentWillUnmount() {
      console.log('unmount');
    }
  });
  // var nameList = new NameList();
  return ReactFormView;
});