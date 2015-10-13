var Register = require('../models/register');
var Config = require('../config/config.js');

var Registers = Backbone.Firebase.Collection.extend({
  model: Register,
  url: Config.firebaseUrl + '/Registers'
});

module.exports = Registers;
