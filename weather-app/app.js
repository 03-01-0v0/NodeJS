/** @format */

const request = require('request');
const geocode = require('./geocode');
const forecast = require('./forecast');

const address = process.argv[2];

const url =
  'http://api.weatherstack.com/current?access_key=0d4268cf72461f7ccfc42203098c1504&query=42.3605,-71.0596&units=f';

request({ url: url, json: true }, (error, response, body) => {
  if (error) {
    console.log('Unable to conect to location services');
  } else if (body.error) {
    console.log('Unable to find location. Try another search');
  } else {
    console.log('descriptions', body.current.weather_descriptions[0]);
    console.log(body.current);
  }
});

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVhbmFuaDAzMDEiLCJhIjoiY2w0d3g0bjM0MmlycTNicWNrZ2R6NzJtaSJ9.i6vrBYyUvT4a_rdorjStKQ';
request({ url: geocodeURL, json: true }, (error, response, body) => {
  // if (error) {
  //   console.log('Unable to conect to location services');
  // } else if (body.features.length === 0) {
  //   console.log('Unable to find location. Try another search');
  // } else {
  //   body.features.forEach((item, index) => {
  //     console.log(item.geometry.coordinates);
  //   });
  // }
});

if (!address) {
  console.log('Please, enter address');
} else {
  geocode(address, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      forecast(
        data[0].geometry.coordinates[0],
        data[0].geometry.coordinates[1],
        (error, dataForecast) => {
          if (error) {
            console.log(error);
          } else {
            console.log(data);
            console.log(dataForecast);
          }
        }
      );
    }
  });
}
