'use strict';

var PageView = require('../framework/page');

var ContactsCollection = require('../collections/contacts'),
  ContactView = require('../views/contact');

var ContactsView = PageView.extend({

  id: 'contacts',

  template: require('../../templates/pages/contacts.hbs'),

  buttonEvents: {
    right: 'selectContact',
    face: 'screenClickExample',
    left: 'back',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  initialize: function() {
    var self = this;

    this.contactsCollection = new ContactsCollection();
    this.listenTo(this.contactsCollection, 'change', this.render);

    this.selectedIndex = 0;

    self.seedContacts();
  },

  // TODO use jquery to load a JSON file async test?
  seedContacts: function() {
    this.contactsCollection.push([
      {name: 'Adam', phoneNumber: '0431 111 111'},
      {name: 'James', phoneNumber: '0431 222 222'},
      {name: 'Marzena', phoneNumber: '0431 333 333'}
    ]);
  },

  screenClickExample: function() {
    this.$el.html('<div>Oh noes!</div>');
  },

  render: function() {

    this.$el.html(this.template());

    var contactsHTML = document.createDocumentFragment();

    this.contactsCollection.each(function(contact, index) {

      contact.attributes.index = index;
      $(contactsHTML).append(this.createContactHTML(contact));
    }, this);

    //$(contactsHTML.firstElementChild.firstElementChild).css('background-color', 'green');
    //$('#contact-'+this.selectedIndex).css('background-color', 'green');

    this.$el.append(contactsHTML);

    return this;
  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
      return view.render().el;
    },

    scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=36px'});
    $('#contact-'+this.selectedIndex).css('background-color', '');
    this.selectedIndex = this.selectedIndex - 1;
    $('#contact-'+this.selectedIndex).css('background-color', 'green');
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=36px'});
    $('#contact-'+this.selectedIndex).css('background-color', '');
    this.selectedIndex = this.selectedIndex + 1;
    $('#contact-'+this.selectedIndex).css('background-color', 'green');
  },

  selectContact: function() {
    $('#contact-'+this.selectedIndex).css('background-color', 'grey');
    var idEmergencyContact = $('#contact-'+this.selectedIndex).children()[0].id;
    console.log("ID: " + idEmergencyContact);
    console.log(this.contactsCollection.get(idEmergencyContact));
    this.contactsCollection.get(idEmergencyContact).isEmergencyContact = true;
  }
}
);

module.exports = ContactsView;
