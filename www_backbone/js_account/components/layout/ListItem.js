define(['react', 'reactdom'], function (React, ReactDOM) {
  var ListItem = React.createClass({
    displayName: 'ListItem',

    getInitialState: function () {
      return null;
    },
    componentWillMount: function () {
      console.log('call before mount to dom');
    },
    componentDidMount: function () {
      console.log('call after mount to dom');
    },
    componentWillUnmount: function () {
      console.log('call before unmount from dom');
    },
    render: function () {
      return React.createElement(
        'li',
        null,
        'this.props.model.item'
      );
    }
  });

  return ListItem;
});