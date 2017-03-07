var zipkey = process.env.HEROKU_ZIPKEY === undefined ? require(__dirname+'/zipcodes.js') : process.env.HEROKU_ZIPKEY

var request = require('request');

let baseURL = 'https://www.zipcodeapi.com/rest/' + zipkey + '/info.json';

module.exports = function(req, res, callback) {
  var options = { method: 'GET', url: baseURL + req};
  request(options, function(error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      callback(JSON.parse(body));
    }
  });
};


