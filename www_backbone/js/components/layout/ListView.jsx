define(['react', 'reactdom', 'components/layout/ListItem'], function(React, ReactDOM, ListItem){
  var ListView = React.createClass({
    getInitialState: function(){
      return null;
    },
    componentWillMount: function(){
      console.log('call before mount to dom');
    },
    componentDidMount: function(){
      console.log('call after mount to dom');
      // this.props.collection.on('add change remove', function(){
      //   this.forceUpdate();
      // }.bind(this));
    },
    componentWillUnmount: function(){
      console.log('call before unmount from dom');
    },
    render: function(){
      var listItem = this.props.collection.map(function(item){
        return (
          <ListItem model={item} key={item.cid} />
        );
      });
      return (
        <div id="list-view">
          <div className="list">
            <div className="list-item">
              {listItem}
            </div>
          </div>
        </div>
      );
    }
  });

  return ListView;
});