var express = require('express');
var server = express();

server.use(express.static('.'));
console.log(process.env.PORT)

server.listen(process.env.PORT || 1998);
