define(['react', 'reactdom', 'components/common/FooterBarContent'], function (React, ReactDOM, FooterBarContent) {
  var FooterBar = React.createClass({
    displayName: 'FooterBar',

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
      // var FooterBarContent = function(){
      //   return (
      //     <FooterBarContent button={this.props.button} />
      //   )
      // }
      return React.createElement(
        'div',
        { className: 'footer-bar' },
        React.createElement(
          'div',
          { className: 'footer-content' },
          React.createElement(FooterBarContent, { button: this.props.button })
        )
      );
    }
  });

  return FooterBar;
});