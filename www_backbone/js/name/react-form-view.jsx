// var require = require('requirejs');
// var React = require('react');
define(['jquery', 'backbone', 'underscore', 'react', 'reactdom', 'name/name-model'], function ($, Backbone, _, React, ReactDOM, Name) {
  Backbone.sync = function(method, model, success, error){
      success();
  };


  var ReactFormView = React.createClass({
    getInitialState: function(){
      return this.props.nameList;
    },
    addName: function () {
      var name = new Name({ name: $('#name').val() });
      this.state.push(name);
      console.log(this.state);
      // nameList.push(this.state);
      // console.log((this.state));
      // this.setState({name: ''});
      ReactDOM.render(<ReactNameView nameList={this.state} />, document.getElementById('content'));
    },
    render: function(){
      return (
        <div>
          <div className="three">
            <input type="text" id="name" placeholder="Insert Your Name" />
          </div>
          <div className="one">
            <button type="submit" id="addName" onClick={this.addName}>Add</button>
          </div>
        </div>
      );
    },
    getNameModel: function(){
      return this.props;
    }

  });

  var ReactNameView = React.createClass({
    componentDidMount: function(){
      this.props.nameList.on('change remove', function(){
        this.forceUpdate();
      }.bind(this));
    },
    render: function(){
      var listOfNames = this.props.nameList.map(function(name){
        console.log(name);
        var removeName = function(){
          console.log('remove');
          name.destroy();
        }

        var editName = function(){
          // var cid = {name.cid};
          console.log('edit ');
          ReactDOM.render(<ReactEditView name={name} />, document.getElementById(name.cid));
          // name.set({name: 'Boon Kiat'});
        }
        return (
          <div key={name.cid}>
            <li>{name.get('name')}</li>
            <div className="row">
              <button id="removeName" className="two" onClick={removeName}>Remove</button>
              <button id="editName" className="two" onClick={editName}>Edit</button>
            </div>
            <div id={name.cid}></div>
          </div>
        );
      });
      return (
        <ul>
          {listOfNames}
        </ul>
      );
    },
  });

  var ReactEditView = React.createClass({
    getInitialState: function(){
      return this.props.name;
    },
    render: function(){
      return (
        <div>
          <input type="text" id="edit" className="three" value={name} />
          <button id="change" className="one" onClick={this.editName} >Submit</button>
        </div>
      )
    },
    editName: function(){
      this.state.set({name: $('#edit').val()});
      ReactDOM.unmountComponentAtNode(document.getElementById(name.cid));
    },
    handleChange: function (e) {
      console.log(this.state);
    },
    componentWillUnmount: function () {
      console.log('unmount');
    }
  })
  // var nameList = new NameList();
  return ReactFormView;
});
