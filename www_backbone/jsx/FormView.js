define(['react', 'reactdom', 'components/forms/FormItem'], function (React, ReactDOM, FormItem) {
  var FormView = React.createClass({
    displayName: 'FormView',

    getInitialState: function () {
      return null;
    },
    componentWillMount: function () {
      console.log('call before mount to dom');
    },
    componentDidMount: function () {
      console.log('call after mount to dom');
    },
    componentWillUnmount: function () {
      console.log('call before unmount from dom');
    },
    render: function () {
      // var FormItem = function(){
      //   return (
      //     <FormItem collection={this.props.collection}/>
      //   );
      // }
      return React.createElement(
        'div',
        { className: 'form-view' },
        React.createElement(FormItem, { collection: this.props.collection })
      );
    }
  });

  return FormView;
});