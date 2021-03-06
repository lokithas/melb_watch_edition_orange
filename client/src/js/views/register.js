'use strict';

var RegisterView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/register.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = RegisterView;
