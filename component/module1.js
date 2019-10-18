// module1.js
var express = require('express');
var expressWs = require('express-ws');

var router = express.Router();
expressWs(router);

router.ws('/user', function(ws1, req) {
    ws.on('message', function(msg) {
        router.ws('/user1', function(ws2, req) {
            ws1.send(1)
            ws2.send(2)
            console.log(msg)
                // ws.on('message', function(msg) {
                //     // 业务代码
                // })
        })
    })
})



router.get('/user', function(req, resp) {})
router.post('/user', function(req, resp) {})

module.exports = router;