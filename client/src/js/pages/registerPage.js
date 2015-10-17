'use strict';

var PageView = require('../framework/page');

var RegistersCollection = require('../collections/registers'),
  RegisterView = require('../views/register');

var registerPage = PageView.extend({

  id: 'register',

  template: require('../../templates/pages/register.hbs'),

  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToHomePage',
    right:'toggleSelect'
  },

  initialize: function() {
    var self = this;

    this.selectedIndex = 0;

    this.registersColleciton = new RegistersCollection();
    this.listenTo(this.registersColleciton, 'change', this.rendor);

    //self.seedRegisters();
  },

  seedRegisters: function() {
    this.registersColleciton.push([
      {location:'Altona', selected:false},
      {location:'Bass', selected:false},
      {location:'Bayswater', selected:false},
      {location:'Bellarine', selected:false},
      {location:'Benambra', selected:false},
      {location:'Bendigo East', selected:false},
      {location:'Bendigo West', selected:false},
      {location:'Bentleigh', selected:false},
      {location:'Box Hill', selected:false},
      {location:'Brighton', selected:false},
      {location:'Broadmeadows', selected:false},
      {location:'Brunswick', selected:false},
      {location:'Bulleen', selected:false},
      {location:'Bundoora', selected:false},
      {location:'Buninyong', selected:false},
      {location:'Burwood', selected:false},
      {location:'Carrum', selected:false},
      {location:'Caulfield', selected:false},
      {location:'Clarinda', selected:false},
      {location:'Cranbourne', selected:false},
      {location:'Croydon', selected:false},
      {location:'Dandenong', selected:false},
      {location:'Eildon', selected:false},
      {location:'Eltham', selected:false},
      {location:'Essendon', selected:false},
      {location:'Euroa', selected:false},
      {location:'Evelyn', selected:false},
      {location:'Ferntree Gully', selected:false},
      {location:'Footscray', selected:false},
      {location:'Forest Hill', selected:false},
      {location:'Frankston', selected:false},
      {location:'Geelong', selected:false},
      {location:'Gembrook', selected:false},
      {location:'Gippsland East', selected:false},
      {location:'Gippsland South', selected:false},
      {location:'Hastings', selected:false},
      {location:'Hawthorn', selected:false},
      {location:'Ivanhoe', selected:false},
      {location:'Kew', selected:false},
      {location:'Keysborough', selected:false},
      {location:'Kororoit', selected:false},
      {location:'Lara', selected:false},
      {location:'Lowan', selected:false},
      {location:'Macedon', selected:false},
      {location:'Malvern', selected:false},
      {location:'Melbourne', selected:false},
      {location:'Melton', selected:false},
      {location:'Mildura', selected:false},
      {location:'Mill Park', selected:false},
      {location:'Monbulk', selected:false},
      {location:'Mordialloc', selected:false},
      {location:'Mornington', selected:false},
      {location:'Morwell', selected:false},
      {location:'Mount Waverley', selected:false},
      {location:'Mulgrave', selected:false},
      {location:'Murray Plains', selected:false},
      {location:'Narracan', selected:false},
      {location:'Narre Warren North', selected:false},
      {location:'Narre Warren South', selected:false},
      {location:'Nepean', selected:false},
      {location:'Niddrie', selected:false},
      {location:'Northcote', selected:false},
      {location:'Oakleigh', selected:false},
      {location:'Ovens Valley', selected:false},
      {location:'Pascoe Vale', selected:false},
      {location:'Polwarth', selected:false},
      {location:'Prahran', selected:false},
      {location:'Preston', selected:false},
      {location:'Richmond', selected:false},
      {location:'Ringwood', selected:false},
      {location:'Ripon', selected:false},
      {location:'Rowville', selected:false},
      {location:'Sandringham', selected:false},
      {location:'Shepparton', selected:false},
      {location:'South Barwon', selected:false},
      {location:'South-West Coast', selected:false},
      {location:'St Albans', selected:false},
      {location:'Sunbury', selected:false},
      {location:'Sydenham', selected:false},
      {location:'Tarneit', selected:false},
      {location:'Thomastown', selected:false},
      {location:'Warrandyte', selected:false},
      {location:'Wendouree', selected:false},
      {location:'Werribee', selected:false},
      {location:'Williamstown', selected:false},
      {location:'Yan Yean', selected:false},
      {location:'Yuroke', selected:false}
    ]);
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=18px'});
    $('#register-'+this.selectedIndex).css('background-color', '');
     this.selectedIndex = this.selectedIndex - 1;
     $('#register-'+this.selectedIndex).css('background-color', 'grey');
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=18px'});
    $('#register-'+this.selectedIndex).css('background-color', '');
      this.selectedIndex = this.selectedIndex + 1;
    $('#register-'+this.selectedIndex).css('background-color', 'grey');
  },

  toggleSelect: function() {
 $('#register-'+this.selectedIndex).css('color', '#f17b00');
     var idEmergencyRegister = $('#register-'+this.selectedIndex).children()[0].id;
     console.log("ID: " + idEmergencyRegister);
     console.log(this.registersColleciton.get(idEmergencyRegister));
   
      var emergencyRegister = this.registerCollection.get(idEmergencyRegister);
      emergencyRegister.set({isEmergencyRegister : true});
  },

  render: function() {

    this.$el.html(this.template());

    var registerHTML = document.createDocumentFragment();

    this.registersColleciton.each(function(register, index) {
      register.attributes.index = index;

      $(registerHTML).append(this.createRegisterHTML(register));
    }, this);

    this.$el.append(registerHTML);

    return this;
  },

  createRegisterHTML: function(register) {
    var view = new RegisterView({
      model: register
    });
    return view.render().el;
  }

});

module.exports = registerPage;
