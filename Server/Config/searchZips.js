var zipkey = require('./zipcodes.js');
var request = require('request');

let baseURL = 'https://www.zipcodeapi.com/rest/' + zipkey + 'info.json/';

var options = { method: 'GET', url: baseURL};

module.exports = function(req, res){
  options.url += req +'/degrees';
  request(options, function(error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      JSON.Parse(body);
    }
  });
};
