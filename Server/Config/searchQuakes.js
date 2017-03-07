var request = require("request");
var zipCodeRequest = require('./searchZips')

var options = {
  method: 'GET',
  url: 'https://earthquake.usgs.gov/fdsnws/event/1/query',
  qs: {
    format: 'geojson',
    starttime: '2000-01-01',
    endtime: '2017-03-05',
    latitude: '',
    longitude: '',
    maxradiuskm: '161'
  },
};

module.exports = function(req, res, callback){
  zipCodeRequest(req, res, function(results){
    options.qs.latitude = JSON.stringify(results["lat"]);
    options.qs.longitude = JSON.stringify(results["lng"]);
    request(options, function (error, response, body) {
      if (error) {
        throw new Error(error);
      } else {
        callback(JSON.parse(body));
      }
    });
  });
};

