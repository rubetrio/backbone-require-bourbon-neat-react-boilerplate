define(['react', 'reactdom', 'components/layout/ListItem'], function (React, ReactDOM, ListItem) {
  var ListView = React.createClass({
    displayName: 'ListView',

    getInitialState: function () {
      return null;
    },
    componentWillMount: function () {
      console.log('call before mount to dom');
    },
    componentDidMount: function () {
      console.log('call after mount to dom');
      //update react view when add new item / change existing item / remove item / remove collection 
      this.props.collection.on('add change remove', function () {
        this.forceUpdate();
      }.bind(this));
    },
    componentWillUnmount: function () {
      console.log('call before unmount from dom');
    },
    render: function () {
      var listItem = this.props.collection.map(function (item) {
        return React.createElement(ListItem, { model: item });
      });
      return React.createElement(
        'div',
        { className: 'list' },
        React.createElement(
          'ul',
          { className: 'list-item', key: this.props.collection.cid },
          listItem
        )
      );
    }
  });

  return ListView;
});
