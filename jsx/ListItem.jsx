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
    },
    componentWillUnmount: function(){
      console.log('call before unmount from dom');
    },
    render: function(){
      return (
        <li>
          this.props.model.item
        </li>
      );
    }
  });

  return ListItem;
});
