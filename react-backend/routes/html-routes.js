const path = require('path');
const mysql = require('mysql');

module.exports = function(app, connection){

    app.get('/', function(req, res, next) {
        
        connection.query('SELECT * FROM test_predictions;', function(err, results, fields) {
            (err)?res.send(err):res.send(JSON.stringify(results));
        });
    });
}