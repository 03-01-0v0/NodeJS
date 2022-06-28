/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
});

con.connect(function (err) {
  if (err) console.log(err);
  console.log('Connected!');
});
