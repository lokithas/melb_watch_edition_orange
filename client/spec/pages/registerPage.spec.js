'use strict';

var RegisterPage = require('../../src/js/pages/registerPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The register Page', function() {

  var registerPage;

  beforeEach(function() {
    registerPage = new RegisterPage();
  });

  describe('button events', function() {

    beforeEach(function() {
      registerPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take user to the register page', function() {
        spyOn(global.App, 'navigate');
        registerPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      registerPage.render();
      expect(registerPage.$el).toContainHtml('<p>You made it :)</p>');
    });

    it('returns the view object', function() {
      expect(registerPage.render()).toEqual(registerPage);
    });
  });
});
