// var require = require('requirejs');
// var React = require('react');

Backbone.sync = function(method, model, success, error){
    success();
};

var Name = Backbone.Model.extend({
  defaults: {
    name: null
  },
  getName: function(){
    return name;
  }
});

var NameList = Backbone.Collection.extend({
  model: Name,

  removeName: function(){
    return this.Name.destroy();
  }
});

var ReactFormView = React.createClass({
  addName: function(){
    var name = new Name({name : $('#name').val()});
    nameList.push(name);
    console.log(JSON.stringify(name.toJSON()));
    ReactDOM.render(<ReactNameView nameList={nameList} />, document.getElementById('testing_id'));
  },
  render: function(){
    return (
      <div>
        <div className="three">
          <input type="text" id="name" placeholder="Insert Your Name"/>
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
      var removeName = function(){
        console.log('remove');
        name.destroy();
      }

      var editName = function(){
        // var cid = {name.cid};
        console.log('edit ');
        // ReactDOM.render(<ReactEditView name={name} />, document.getElementById());
        name.set({name: 'Boon Kiat'});
      }
      return (
        <div id={name.cid}>
          <li>{name.get('name')}</li>
          <div className="row">
            <button id="removeName" className="two" onClick={removeName}>Remove</button>
            <button id="editName" className="two" onClick={editName}>Edit</button>
          </div>
        </div>
      );
    });
    return (
      <ul>
        {listOfNames}
      </ul>
    );
  },
  // removeName: function(){
  //   console.log('remove');
  //   this.props.name.destroy();
  // },
});

var ReactEditView = React.createClass({
  render: function(){
    return (
      <div>
        <input type="text" id="edit" className="three" value={name.get('name')} />
        <button id="change" className="one" onClick={this.editName}>Submit</button>
      </div>
    )
  },
  editName: function(){
    name.set({name: $('#edit').val()});
    ReactDom.unmountComponentAtNode(document.getElementById(name.cid));
  }
})
var nameList = new NameList();
ReactDOM.render(<ReactFormView />, document.getElementById('testing'));
