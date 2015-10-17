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

  /*describe('register data', function() {

    it('should have a register collection', function() {
      expect(registerPage.registersCollection).toBeDefined();
    });

    describe('loading data', function() {
      it('should load the data from ...');
    });

  });*/

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
    it('returns the view object', function() {
      expect(registerPage.render()).toEqual(registerPage);
    });
  });

});
