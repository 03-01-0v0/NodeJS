/** @format */

const http = require('http');
const url =
  'http://api.weatherstack.com/current?access_key=0d4268cf72461f7ccfc42203098c1504&query=42.3605,-71.0596&units=f';
const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () => {
    console.log(JSON.parse(data));
  });
});
request.on('error', (error) => {
  console.log(error);
});
request.end();
