/** @format */

const request = require('request');
const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?access_token=pk.eyJ1IjoidHVhbmFuaDAzMDEiLCJhIjoiY2w0d3g0bjM0MmlycTNicWNrZ2R6NzJtaSJ9.i6vrBYyUvT4a_rdorjStKQ';
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to conect to location services', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, body.features);
    }
  });
};
module.exports = geocode;
