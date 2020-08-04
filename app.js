var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const authenticate = require('./authenticate');
var indexRouter = require('./routes/index');
const capsuleRouter = require('./routes/capsuleRouter');
const powderRouter = require('./routes/powderRouter');
const contactRouter = require('./routes/contactRouter');
const reviewRouter = require('./routes/reviewRouter');
const customerInfoRouter = require('./routes/customerInfoRouter');
const mongoose = require('mongoose');
const config = require('./config');

const url = "mongodb+srv://dbUser:goodkarma864'@cluster0.fxow3.azure.mongodb.net/ApnaBotanicals?retryWrites=true&w=majority"
const connect = mongoose.connect(url, {
  useCreateIndex:true,
  useFindAndModify:true,
  useNewUrlParser:true,
  useUnifiedTopology:true
})

connect.then(() => console.log('Connected correctly to server'),
err => console.log(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);

app.use('/capsules', capsuleRouter);
app.use('/powders', powderRouter);
app.use('/contact', contactRouter);
app.use('/reviews', reviewRouter);
app.use('/customers', customerInfoRouter);

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
