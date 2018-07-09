var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('newMessage', function(newMessage) {
    console.log('Received email from Billy', newMessage);
  });

  socket.emit('createMessage', {
    to: 'jen@example.com',
    from: 'mary@hotline.zip'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected to server');
});
