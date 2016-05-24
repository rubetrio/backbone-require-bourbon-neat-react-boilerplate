define(['react', 'reactdom'], function(React, ReactDOM){
  var FooterBarContent = React.createClass({
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
          <a className="button">{this.props.button.one}</a>
          <a className="button">{this.props.button.two}</a>
          <a className="button">{this.props.button.three}</a>
          <a className="button">{this.props.button.four}</a>
          <a className="button">{this.props.button.five}</a>
        </div>
      );
    }
  });

  return FooterBarContent;
});
