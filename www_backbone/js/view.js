TestView = Backbone.View.extend({
  initialize: function(){
    console.log('sampleView has been created');
  }
});

//to append li
// NameView = Backbone.View.extend({
//   tagName: "li",
//   render: function(){
//     this.$el.append(this.model.get('name'));
//     var m_nameButtonView = new NameButtonView(this);
//     m_nameButtonView.render();
//   }
// });

Backbone.sync = function(method, model, success, error){
    success();
};

var NameView2 = Backbone.View.extend({
  tagName: 'div',
  className: 'row',
  template: '',
  initialize: function(){
    this.template = _.template($('#nameItem').html());

    _.bindAll(this, 'render', 'unrender', 'remove');
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "remove", this.unrender);
  },

  events: {
    "click button#removeName": "removeName"
  },

  render: function(){
    this.$el.html(this.template(this.model));
    return this;
  },

  unrender: function(){
    this.removeName();
    this.$el.remove();
  },

  removeName: function(){
    this.model.destroy();
  }
});

var FormView = Backbone.View.extend({
  el: '.testing',

  events: {
    'click button#addName' : 'addName'
  },

  initialize: function(){
    _.bindAll(this, 'render', 'addName');
    this.collection = new NameCollections();
    this.collection.listenTo(this.collection, "add", this.appendName);
    this.render();
  },

  render: function(){
    this.$el.append('<div class="three"><input type="text" id="name" placeholder="Insert Your Name"/></div><div class="one"><button type="submit" id="addName">Add</button></div>');
    $('#testing_id').append('<ul></ul>');
  },

  addName: function(){
    var name = new Name();
    var input = $('#name').val();
    name.set({
      name: input
    });
    this.collection.add(name);
  },
  appendName: function(name){
    var nameView = new NameView2({model: name});
    $('ul', '#testing_id').append(nameView.render().el);
  }
});

// NameButtonView = Backbone.View.extend({
//   tagName: "button",
//   render: function(){
//     this.$el.append('<button>Remove</button>');
//   },
//   events: {
//     'click #removeName': 'removeName'
//   },
//   removeName: function(){
//     this.model.unset();
//   }
// });

//listen to event add, then call render..render then initialize NameView object and render it.
var NameListView = Backbone.View.extend({
  el: $("#testing_id"),
  tagName: "ul",
  render: function(){
    var self = this;
    var m_nameView = new NameView2({model: self.collection.at(self.collection.length - 1)});
    self.$el.append(m_nameView.render().el);
    // m_nameView.render();
    return self;
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.remove);
  },
  remove: function(){
    this.collection.remove();
  }
});
