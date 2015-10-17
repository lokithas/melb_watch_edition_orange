var Contact = Backbone.Model.extend({
  defaults: {
    name: 'Jimmy',
    phoneNumber: '0431111222',
    isEmergencyContact: false
  }
});

module.exports = Contact;
