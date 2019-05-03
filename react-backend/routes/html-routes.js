const path = require('path');
const mysql = require('mysql');

module.exports = function(app, connection){

    app.get('/', function(req, res) {
        
        connection.query('SELECT * FROM test_predictions;', function(err, data) {
            (err)?res.send(err):res.json({users: data});
        });
    });
}