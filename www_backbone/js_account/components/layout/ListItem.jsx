define(['react', 'reactdom'], function(React, ReactDOM){
  var ListItem = React.createClass({
    getInitialState: function(){
      return null;
    },
    componentWillMount: function(){
      console.log('call before mount to dom');
    },
    componentDidMount: function(){
      console.log('call after mount to dom');
      this.props.model.on('change remove', function(){
        this.forceUpdate();
      }.bind(this));
    },
    componentWillUnmount: function(){
      console.log('call before unmount from dom');
    },
    render: function(){
      return (
        <li className="item" key={this.props.model.cid}>
          {this.props.model.get('name')}
        </li>
      );
      
    }
  });

  return ListItem;
});
