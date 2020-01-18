// server.js
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hansper2_electricity"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
global.db = con;

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    
    {getServiceAddress, getAddressData, getEnergyRate} = require('./routes/customer.route');    



const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/:data', getServiceAddress);
app.get('/getAddressData/:address',getAddressData);
app.post('/getEnergyRate',getEnergyRate);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});