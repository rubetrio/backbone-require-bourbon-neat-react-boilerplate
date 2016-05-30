define(['react', 'reactdom', 'name/name-model', 'backbone'], function (React, ReactDOM, Name, Backbone) {
  var FormItem = React.createClass({
    input: '',
    getInitialState: function(){
      return {
        collection: this.props.collection,
        showWarning: false
      };
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
      var input, warning;
      console.log(this.state);
      if(this.state.showWarning){
        warning = <p>Name cannot be blank</p>;
      }
      return (
        <div>
          <div className="row">
            <input className="three" type="text" ref={(r) => this.input = r} onKeyUp={this.addName} placeholder="Insert your name" required/>
            <button className="one" onClick={this.addName}>Add</button>
          </div>
          <p className={this.state.showWarning ? "show" : "hide"}>Name cannot be blank</p>
        </div>
      );
    },
    addName: function(e){
      if(e.keyCode == 13 || e.keyCode === undefined){
        if(this.input.value === null || this.input.value.trim() === ""){
          this.state.showWarning = true;
          console.log(this.state);
          return;
        }
        var name = new Name();
        name.set({name: this.input.value});
        this.state.collection.push(name);
        // console.log(this.props.collection);
        Backbone.history.navigate('list', true);
      } else {
        e.preventDefault();
      }
    }
  });

  return FormItem;
});
