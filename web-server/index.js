/** @format */

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, './public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('home', {
    title: 'Home',
    name: 'Tuan Anh',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Tuan Anh',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Tuan Anh',
  });
});

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
