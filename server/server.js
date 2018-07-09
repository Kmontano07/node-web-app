const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.on('createMessage', (message) => {
    console.log('Receieved email from client', message);
  });

  socket.emit('newMessage', {
    from: 'billy@zen.net',
    text: 'Looking good my man',
    createdAt: new Date()
  });

  socket.on('disconnect', () => {
    console.log('Disconnected user');
  });
})

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
