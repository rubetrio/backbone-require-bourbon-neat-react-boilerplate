define(['react', 'reactdom', 'name/name-model'], function (React, ReactDOM, Name) {
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
          <input className="three" type="text" ref={(r) => this.input = r} placeholder="Insert your name" />
          <button className="one" onClick={this.addName}>Add</button>
        </div>
      );
    },
    addName: function(){
      var name = new Name();
      name.set({name: this.input.value});
      this.state.push(name);
    }
  });

  return FormItem;
});
