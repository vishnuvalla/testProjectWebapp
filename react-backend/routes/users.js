var express = require('express');
var router = express.Router();
const path = require('path');
const mysql = require('mysql')


module.exports = function(app,connection){
  app.get('/', function(req, res) {
    connection.query('SELECT * FROM test_predictions LIMIT 10;', function(err, data) {
      (err)?res.send(err):res.send(JSON.stringify(data));
    });
  });
}
