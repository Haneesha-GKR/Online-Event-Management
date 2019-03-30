var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var db = mongoose.connect('mongodb://localhost/cart', { useMongoClient: true });
require('./server/models/cart_model.js');
app.use(express.static(path.join(__dirname, '/web')));
app.use(bodyParser.json());
require('./server_routes')(app);
require('./server_init');
app.listen(5500);