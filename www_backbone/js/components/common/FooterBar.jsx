define(['react', 'reactdom', 'components/common/FooterBarContent'], function(React, ReactDOM, FooterBarContent){
  var FooterBar = React.createClass({
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
      // var FooterBarContent = function(){
      //   return (
      //     <FooterBarContent button={this.props.button} />
      //   )
      // }
      return (
        <div id="nav-footer">
          <div className='footer-bar'>
            <div className="footer-content">
              <FooterBarContent button={this.props.button} />
            </div>
          </div>
        </div>
      );
    }
  });

  return FooterBar;
});
