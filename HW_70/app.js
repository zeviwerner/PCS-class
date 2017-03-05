"use strict";
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var server = http.createServer(app);
server.listen(80);

const socket_io = require('socket.io');
const io = socket_io.listen(server);
var msgObj = {};


io.on('connection', socket => {
  socket.on('name', name => {
    console.log('Got a connection from ' + name);
    if (name) {
      io.sockets.emit('join', name + ' joined the chat');
    }
    msgObj.name = name;
  });

  socket.emit('message', 'Thanks for connecting!');


  socket.on('message', data => {
    msgObj.message = data;
    console.log(msgObj);
    io.sockets.emit('message', msgObj);
  });
});




/*io.on('disconnect', socket => {
  socket.on('name', name => {
    console.log('Got disconnected from ' + name);
  
  });
});*/
//socket.emit('message', 'Sorry to see you go!');