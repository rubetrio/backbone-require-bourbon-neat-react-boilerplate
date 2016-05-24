define(['react', 'reactdom', 'name/name-model'], function (React, ReactDOM, Name) {
  var FormItem = React.createClass({
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
        <div>
          <input type="text" placeholder="Insert your name" onChange={this.handleChange}/>
          <button onClick={this.addName}>Add</button>
        </div>
      );
    },
    addName: function(){
      var name = new Name();
      name.set({name: input});
      this.state.push(name);
    },
    handleChange: function(e){
      input = e.target.value;
    }
  });

  return FormItem;
});
