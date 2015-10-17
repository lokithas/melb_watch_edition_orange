var Config = {};

if (process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://watch-levelup-orange.firebaseio.com';
} else {
  Config.firebaseUrl = 'https://watch-levelup-orange.firebaseio.com';
}

module.exports = Config;