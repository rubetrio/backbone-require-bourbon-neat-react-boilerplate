define(['react', 'reactdom'], function(React, ReactDOM){
  var HeaderBarContent = React.createClass({
    getInitialState: function(){
      return null;
    },
    componentWillMount: function(){
      // console.log('call before mount to dom');
    },
    componentDidMount: function(){
      // console.log('call after mount to dom');
    },
    componentWillUnmount: function(){
      // console.log('call before unmount from dom');
    },
    render: function(){
      var leftButton, rightButton;
      if(this.props.button.one !== undefined){
        leftButton = (<a className="button pull-left">{this.props.button.one}</a>);
      }
      if(this.props.button.two !== undefined){
        rightButton =  (<a className="button pull-right" href="#add">{this.props.button.two}</a>);
      }
      return (
        <div className="row">
          {leftButton}
            <h4>{this.props.header}</h4>
          {rightButton}
        </div>
      );
    }
  });

  return HeaderBarContent;
});
