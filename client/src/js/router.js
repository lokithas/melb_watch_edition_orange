'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  RegisterPage = require('./pages/registerPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  registerPage = new RegisterPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    register: 'register'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  register: function() {
    this.renderView(registerPage);
  }


});

module.exports = AppRouter;
