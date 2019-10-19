const express = require("express")
const app = express()
var expressWs = require('express-ws')(app);
const fs = require("fs")
const bodyparser = require("body-parser")
var module1 = require('./component/module1');

app.use('/ws', module1);


app.use("/", express.static(__dirname))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// module1.js
// var router = express.Router();
// expressWs(router);

app.ws('/user', function(ws, req) {
    ws.send("ok")
    ws.on('message', function(msg) {
        console.log(msg)
        console.log(expressWs.getWss().clients)
        console.log(expressWs.getWss())
    })
})




// app.ws("/ws", function(ws, req) {
//     ws.send("ok1")
// })


app.listen(3000, () => {
    console.log("3000")
})