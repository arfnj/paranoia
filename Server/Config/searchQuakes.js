var request = require("request");
var zipCodeRequest = require('./searchZips')

var options = {
  method: 'GET',
  url: 'https://earthquake.usgs.gov/fdsnws/event/1/query',
  qs: {
    format: 'geojson',
    starttime: '2016-03-06',
    endtime: '2017-03-05',
    latitude: '',
    longitude: '',
    maxradiuskm: '161'
  },
};

module.exports = function(req, res, callback){
  console.log('SearchQuake.js / zipCode', req)
  zipCodeRequest(req, res, function(results){
    console.log('zipCodeRequest results for ' + req + ' : ', results)
    options.qs.latitude = JSON.stringify(results["lat"]);
    options.qs.longitude = JSON.stringify(results["lng"]);
    console.log('SearchQuake.js / options', options)
    request(options, function (error, response, body) {
      // console.log(options);
      if (error) {
        throw new Error(error);
      // } else if (response.statusCode = 400) {
        // callback TBD
      } else {
        callback(JSON.parse(body));
      }
    });
  });
};

