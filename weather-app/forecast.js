/** @format */

const request = require('request');
const forecast = (latitude, longtitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=0d4268cf72461f7ccfc42203098c1504&query=' +
    latitude +
    ',' +
    longtitude +
    '&units=f';
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to conect to location services', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = forecast;
