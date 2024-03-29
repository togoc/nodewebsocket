var express = require("express")
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use("/static", express.static("static/"))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});




io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

io.on('/user', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

io.on('connection', function(socket) {
    console.log('a user connected');
});





http.listen(3000, function() {
    console.log('listening on *:3000');
});