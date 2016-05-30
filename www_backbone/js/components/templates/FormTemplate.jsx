define(['react', 'reactdom', 'components/common/HeaderBar', 'components/common/FooterBar', 'components/forms/FormView'],
  function(React, ReactDOM, HeaderBar, FooterBar, FormView){
  var FormTemplate = React.createClass({
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
      return (
        <div>
          <HeaderBar button={this.props.buttons.header} header={this.props.header}/>
          <div className="content">
            <FormView collection={this.props.collection}/>
          </div>
          <FooterBar button={this.props.buttons.footer}/>
        </div>
      );
    }
  });

  return FormTemplate;
});
