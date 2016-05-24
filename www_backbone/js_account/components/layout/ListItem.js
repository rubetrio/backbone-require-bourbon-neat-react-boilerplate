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
      //update react view when model changed / removed
      // this.props.model.on('change remove', function () {
      //   this.forceUpdate();
      // }.bind(this));
    },
    componentWillUnmount: function () {
      console.log('call before unmount from dom');
    },
    render: function () {
      return React.createElement(
        'li',
        { key: this.props.model.cid },
        this.props.model.get('name')
      );
    }
  });

  return ListItem;
});
