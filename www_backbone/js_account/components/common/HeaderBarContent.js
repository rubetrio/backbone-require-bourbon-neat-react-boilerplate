define(['react', 'reactdom'], function (React, ReactDOM) {
  var HeaderBarContent = React.createClass({
    displayName: 'HeaderBarContent',

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
        'div',
        { className: 'row' },
        React.createElement(
          'a',
          { className: 'button pull-left' },
          this.props.button.one
        ),
        React.createElement(
          'h4',
          null,
          this.props.header
        ),
        React.createElement(
          'a',
          { className: 'button pull-right', href: '#add' },
          this.props.button.two
        )
      );
    }
  });

  return HeaderBarContent;
});