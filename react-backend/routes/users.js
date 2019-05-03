var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM test_predictions LIMIT 10;', function(err, results, fields) {
      (err)?res.send(err):res.send(JSON.stringify(results));
  });
});

module.exports = router;
