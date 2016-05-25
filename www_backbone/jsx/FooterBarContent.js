define(['react', 'reactdom'], function (React, ReactDOM) {
  var FooterBarContent = React.createClass({
    displayName: 'FooterBarContent',

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
          { className: 'button' },
          this.props.button.one
        ),
        React.createElement(
          'a',
          { className: 'button' },
          this.props.button.two
        ),
        React.createElement(
          'a',
          { className: 'button' },
          this.props.button.three
        ),
        React.createElement(
          'a',
          { className: 'button' },
          this.props.button.four
        ),
        React.createElement(
          'a',
          { className: 'button' },
          this.props.button.five
        )
      );
    }
  });

  return FooterBarContent;
});