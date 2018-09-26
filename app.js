var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sellerrouter = require('./routes/seller')
var goodsrouter = require('./routes/goods')
var ratingsrouter = require('./routes/ratings')
var app = express();
//连接数据库
mongoose.connect('mongodb://localhost/sell')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('连接数据库成功');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/seller', sellerrouter)
app.use('/admin/goods', goodsrouter)
app.use('/admin/ratings', ratingsrouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;