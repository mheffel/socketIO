var express = require('express');
var app = express.createServer();
var io = require('socket.io').listen(app);
//io.set('log level', 1);

app.listen(3000);

app.use(express.static(__dirname));

io.sockets.on('connection', function (socket) {
  console.log("In connection");
//  socket.emit('news', { hello: 'world' });
//  socket.broadcast.emit('news', message);

//  socket.on('newvalue', function (data) {
//    console.log("In newvalue");
//    console.log(data);
//    io.sockets.emit('update', data);
//  });
  socket.on('newvalue', function (data) {
    console.log("In newvalue");
    console.log(data);
    io.sockets.emit('update', data);
  });
});




