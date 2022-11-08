var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var usersProfileRouter = require('./routes/usersProfile');
var updateProfilRouter = require('./routes/updateProfil');
var searchGamesRouter = require('./routes/searchGames');
var searchGamesORouter = require('./routes/searchGamesO');
var cartRouter = require('./routes/cart');
var consolesRouter = require('./routes/consoles')
const { use } = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Allow-Origin-With-Credentials");
  res.header("Access-Control-Allow-Methods", "POST,PUT,GET,OPTIONS" )
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/usersProfile', usersProfileRouter);
app.use('/updateProfil', updateProfilRouter);
app.use('/searchGames', searchGamesRouter);
app.use('/searchGamesO', searchGamesORouter);
app.use('/cart', cartRouter);
app.use('/consoles', consolesRouter);
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
});

module.exports = app;
