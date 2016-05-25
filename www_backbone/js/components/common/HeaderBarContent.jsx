define(['react', 'reactdom'], function(React, ReactDOM){
  var HeaderBarContent = React.createClass({
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
        <div className="row">
          <a className="button pull-left">{this.props.button.one}</a>
          <h4>{this.props.header}</h4>
          <a className="button pull-right" href="#add">{this.props.button.two}</a>
        </div>
      );
    }
  });

  return HeaderBarContent;
});
