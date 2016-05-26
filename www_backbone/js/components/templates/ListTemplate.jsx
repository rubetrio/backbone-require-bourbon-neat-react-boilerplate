define(['react', 'reactdom', 'components/layout/ListView', 'components/common/HeaderBar', 'components/common/FooterBar'],
  function(React, ReactDOM, ListView, HeaderBar, FooterBar){

  var BackboneMixin = {
    componentDidMount: function(){
      console.log('*************');
      this.getBackboneModels().on('add change remove', function(){
        this.forceUpdate();
      }, bind(this));
    },

    componentWillUnmount: function(){
      this.getBackboneModels().off(null, null, this);
    }
  };
  var ListTemplate = React.createClass({
    mixin: [BackboneMixin],
    getInitialState: function(){
      return null;
    },
    componentWillMount: function(){
      console.log('call before mount to dom');
    },
    componentDidMount: function(){
      console.log('call after mount to dom');
      // this.props.collection.on('add change remove', function(){
      //   this.forceUpdate();
      // }.bind(this));
    },
    componentWillUnmount: function(){
      console.log('call before unmount from dom');
    },
    getBackboneModels: function(){
      return [this.props.collection];
    },
    render: function(){
      return (
        <div>
          <HeaderBar button={this.props.buttons.header} header={this.props.header}/>
          <div className='content'>
            <ListView collection={this.props.collection} />
          </div>
          <FooterBar button={this.props.buttons.footer}/>
        </div>
      );
    }
  });

  return ListTemplate;
});
