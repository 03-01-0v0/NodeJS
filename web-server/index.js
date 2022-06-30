/** @format */

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./src/utils/geocode');
const forecast = require('./src/utils/forecast');
const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
  res.render('home', {
    title: 'Home',
    name: 'Tuan Anh',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address',
    });
  }
  geocode(req.query.address, (err, data = {}) => {
    if (err) {
      return res.send({ err });
    } else {
      forecast(
        data[0].geometry.coordinates[0],
        data[0].geometry.coordinates[1],
        (error, dataForecast) => {
          if (error) {
            return res.send({ error });
          } else {
            return res.send({
              data,
              dataForecast,
              address: req.query.address,
            });
          }
        }
      );
    }
  });
  // res.send({
  //   forecast: 'It is snowing',
  //   location: 'Philadelphia',
  //   address: req.query.address,
  // });
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

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Tuan Anh',
    errorMessage: 'Help article not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Tuan Anh',
    errorMessage: 'Page not found',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
