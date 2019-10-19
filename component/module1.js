// module1.js
var express = require('express');
var expressWs = require('express-ws');

var router = express.Router();
expressWs(router);

router.ws('/user', function(ws, req) {
    ws.send("ok")
    ws.on('message', function(msg) {
        console.log(msg)
        console.log(expressWs.getWss().clients)
    })
})



router.get('/user', function(req, resp) {})
router.post('/user', function(req, resp) {})

module.exports = router;