const express = require("express")
var expressWs = require('express-ws');
const fs = require("fs")
const bodyparser = require("body-parser")
var module1 = require('./component/module1');
const app = express()

expressWs(app)
app.use('/ws', module1);


app.use("/", express.static(__dirname))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// module1.js
// var router = express.Router();
// expressWs(router);





// app.ws("/ws", function(ws, req) {
//     ws.send("ok1")
// })















app.listen(3000, () => {
    console.log("3000")
})