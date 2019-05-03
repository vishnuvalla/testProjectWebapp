var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user:'admin',
  password:'DeepRisk&&',//password of your mysql db
  database:'test'
});

var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/



app.get('/predictions', function(req, res) {

  connection.connect();


  connection.query("SELECT * FROM test_predictions LIMIT 10;", function (error, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(results)
  });

  connection.end();

})

/*app.listen(3001, () => {
  console.log('Go to http://localhost:3001/predictions to see query results');
 });*/



/*connection.connect(function(err){
(err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});*/

//require('./routes/users')(app, connection);

//module.exports = app;
