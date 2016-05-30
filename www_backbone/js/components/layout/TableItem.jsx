define(['react', 'reactdom'], function(React, ReactDOM){
  var TableItem = React.createClass({
    getInitialState: function(){
      return null;
    },
    componentWillMount: function(){
      // console.log('call before mount to dom');
    },
    componentDidMount: function(){
      // console.log('call after mount to dom');
      // this.props.model.on('change remove', function(){
      //   this.forceUpdate();
      // }.bind(this));
    },
    componentWillUnmount: function(){
      // console.log('call before unmount from dom');
    },
    render: function(){
      // console.log(this.props.model.cid);
      return (
        <tbody>
          <tr>
            <td className="frozen-column">{this.props.symbol.get('name')}</td>
            <td>{this.props.collection.get('last')}</td>
            <td>{this.props.collection.get('change')}</td>
            <td>{this.props.collection.get('volume')}</td>
            <td>{this.props.collection.get('high')}</td>
            <td>{this.props.collection.get('low')}</td>
          </tr>
        </tbody>
      );

    }
  });

  return TableItem;
});
