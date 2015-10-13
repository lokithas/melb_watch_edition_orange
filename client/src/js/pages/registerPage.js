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
    left: 'goToHomePage'
  },

  initialize: function() {
    var self = this;

    this.registersColleciton = new RegistersCollection();
    this.listenTo(this.registersColleciton, 'change', this.rendor);

    //self.seedRegisters();
  },

  seedRegisters: function() {
    this.registersColleciton.push([
      {location:'Altona'},
      {location:'Bass'},
      {location:'Bayswater'},
      {location:'Bellarine'},
      {location:'Benambra'},
      {location:'Bendigo East'},
      {location:'Bendigo West'},
      {location:'Bentleigh'},
      {location:'Box Hill'},
      {location:'Brighton'},
      {location:'Broadmeadows'},
      {location:'Brunswick'},
      {location:'Bulleen'},
      {location:'Bundoora'},
      {location:'Buninyong'},
      {location:'Burwood'},
      {location:'Carrum'},
      {location:'Caulfield'},
      {location:'Clarinda'},
      {location:'Cranbourne'},
      {location:'Croydon'},
      {location:'Dandenong'},
      {location:'Eildon'},
      {location:'Eltham'},
      {location:'Essendon'},
      {location:'Euroa'},
      {location:'Evelyn'},
      {location:'Ferntree Gully'},
      {location:'Footscray'},
      {location:'Forest Hill'},
      {location:'Frankston'},
      {location:'Geelong'},
      {location:'Gembrook'},
      {location:'Gippsland East'},
      {location:'Gippsland South'},
      {location:'Hastings'},
      {location:'Hawthorn'},
      {location:'Ivanhoe'},
      {location:'Kew'},
      {location:'Keysborough'},
      {location:'Kororoit'},
      {location:'Lara'},
      {location:'Lowan'},
      {location:'Macedon'},
      {location:'Malvern'},
      {location:'Melbourne'},
      {location:'Melton'},
      {location:'Mildura'},
      {location:'Mill Park'},
      {location:'Monbulk'},
      {location:'Mordialloc'},
      {location:'Mornington'},
      {location:'Morwell'},
      {location:'Mount Waverley'},
      {location:'Mulgrave'},
      {location:'Murray Plains'},
      {location:'Narracan'},
      {location:'Narre Warren North'},
      {location:'Narre Warren South'},
      {location:'Nepean'},
      {location:'Niddrie'},
      {location:'Northcote'},
      {location:'Oakleigh'},
      {location:'Ovens Valley'},
      {location:'Pascoe Vale'},
      {location:'Polwarth'},
      {location:'Prahran'},
      {location:'Preston'},
      {location:'Richmond'},
      {location:'Ringwood'},
      {location:'Ripon'},
      {location:'Rowville'},
      {location:'Sandringham'},
      {location:'Shepparton'},
      {location:'South Barwon'},
      {location:'South-West Coast'},
      {location:'St Albans'},
      {location:'Sunbury'},
      {location:'Sydenham'},
      {location:'Tarneit'},
      {location:'Thomastown'},
      {location:'Warrandyte'},
      {location:'Wendouree'},
      {location:'Werribee'},
      {location:'Williamstown'},
      {location:'Yan Yean'},
      {location:'Yuroke'}
    ]);
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

    var registerHTML = document.createDocumentFragment();

    this.registersColleciton.each(function(register) {
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
