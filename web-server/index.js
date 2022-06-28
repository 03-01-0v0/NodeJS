/** @format */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/help', (req, res) => {
  res.send({
    name: 'Tuananh',
    age: '22',
  });
});

app.get('/about', (req, res) => {
  res.send([
    {
      name: 'Tuananh',
      age: '22',
    },
    {
      name: 'SonDinh',
      age: '23',
    },
  ]);
});

app.get('/weather', (req, res) => {
  res.send('Weather page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
