define(['react', 'reactdom', 'components/layout/ListItem', 'components/layout/TableItem'], function(React, ReactDOM, ListItem, TableItem){
  var ListView = React.createClass({
    getInitialState: function(){
      return null;
    },
    componentWillMount: function(){
      // console.log('call before mount to dom');
    },
    componentDidMount: function(){
      // console.log('call after mount to dom');
      // this.props.collection.on('add change remove', function(){
      //   this.forceUpdate();
      // }.bind(this));
    },
    componentWillUnmount: function(){
      // console.log('call before unmount from dom');
        // <ListItem model={item} key={item.cid} />
    },
    render: function(){
      var thead;
      var listItem = this.props.collection.map(function(item){
        if(item !== null || item !== undefined){
          thead = (
            <thead>
              <tr>
                <th className="frozen-column">Symbol</th>
                <th>Last</th>
                <th>Change</th>
                <th>Volume</th>
                <th>High</th>
                <th>Low</th>
              </tr>
            </thead>
          );
        }
        return (
          <TableItem collection={item.get('info')} symbol={item} key={item.cid} />
        );
      });
      return (
        <div id="list-view">
          <div className="list">
            <div className="list-item">
            <table className="table-minimal">
              {thead}
              {listItem}
              </table>
            </div>
          </div>
        </div>
      );
    }
  });
  propTypes: {
    collection: React.PropTypes.arrayOf(React.PropTypes.shape({
      item: React.PropTypes.string.isRequired,
      collection: React.PropTypes.arrayOf(React.PropTypes.shape({
        last: React.PropTypes.number.isRequired,
        change: React.PropTypes.string.isRequired,
        volume: React.PropTypes.number.isRequired,
        high: React.PropTypes.number.isRequired,
        low: React.PropTypes.number.isRequired
      }))
    })).isRequired;
  }
  return ListView;
});
