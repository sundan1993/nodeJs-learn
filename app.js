var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// var user = require('./routes/user');
// var post = require('./routes/post')
// var reg = require('./routes/reg');
// var doReg = require('./routes/doReg');
// var login = require('./routes/login');
// var doLogin = require('./routes/doLogin');
// var logout = require('./routes/logout');

var app = express();

// view engine setup
//__dirname变量获取当前模块文件所在目录的完整绝对路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 配置静态文件服务器

app.use('/', index);
// app.use('/user/:u', user);
// app.post('/post', post);
// app.get('/reg', reg);
// app.post('/doReg', doReg);
// app.get('/login', login);
// app.post('/doLogin', doLogin);
// app.get('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
