define(['react', 'reactdom', 'components/forms/FormItem'], function(React, ReactDOM, FormItem){
  var FormView = React.createClass({
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
      // var FormItem = function(){
      //   return (
      //     <FormItem collection={this.props.collection}/>
      //   );
      // }
      return (
        <div id="form-view">
          <div className="form-view">
            <FormItem collection={this.props.collection}/>
          </div>
        </div>
      );
    }
  });

  return FormView;
});
