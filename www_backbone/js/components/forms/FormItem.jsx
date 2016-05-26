define(['react', 'reactdom', 'name/name-model', 'backbone'], function (React, ReactDOM, Name, Backbone) {
  var FormItem = React.createClass({
    input: '',
    getInitialState: function(){
      return this.props.collection;
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
      var input;
      return (
        <div className="row">
          <input className="three" type="text" ref={(r) => this.input = r} onKeyUp={this.addName} placeholder="Insert your name" />
          <button className="one" onClick={this.addName}>Add</button>
        </div>
      );
    },
    addName: function(e){
      if(e.keyCode == 13 || e.keyCode === undefined){
        var name = new Name();
        name.set({name: this.input.value});
        this.state.push(name);
        // console.log(this.props.collection);
        Backbone.history.navigate('list', {trigger: true});
      } else {
        e.preventDefault();
      }
    }
  });

  return FormItem;
});
