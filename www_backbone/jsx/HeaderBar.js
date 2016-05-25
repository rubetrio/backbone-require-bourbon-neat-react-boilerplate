define(['react', 'reactdom', 'components/common/HeaderBarContent'], function (React, ReactDOM, HeaderBarContent) {
  var HeaderBar = React.createClass({
    displayName: 'HeaderBar',

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
      // var HeaderBarContent = function(){
      //   return (
      //     <HeaderBarContent button={this.props.button} header={this.props.header}/>
      //   )
      // }
      return React.createElement(
        'nav',
        { className: 'header-bar' },
        React.createElement(
          'div',
          { className: 'header-content' },
          React.createElement(HeaderBarContent, { button: this.props.button, header: this.props.header })
        )
      );
    }
  });

  return HeaderBar;
});