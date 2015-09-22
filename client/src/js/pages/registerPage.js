'use strict';

var PageView = require('../framework/page');

var registerPage = PageView.extend({

  id: 'register',

  template: require('../../templates/pages/register.hbs'),

  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToHomePage'
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());
    return this;
  }

});

module.exports = registerPage;
