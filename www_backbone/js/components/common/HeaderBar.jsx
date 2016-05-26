define(['react', 'reactdom', 'components/common/HeaderBarContent'], function(React, ReactDOM, HeaderBarContent){
  var HeaderBar = React.createClass({
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
      // var HeaderBarContent = function(){
      //   return (
      //     <HeaderBarContent button={this.props.button} header={this.props.header}/>
      //   );
      // };
      return (
        <div className='nav-header'>
          <nav className='header-bar'>
            <div className="header-content">
              <HeaderBarContent button={this.props.button} header={this.props.header} />
            </div>
          </nav>
        </div>
      );
    }
  });

  return HeaderBar;
});
