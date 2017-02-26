"use strict";

const http = require('http'),
    fs = require('fs');
var fileName = process.argv[3],
    port = process.argv[2];

var server = http.createServer((request, response) => {
    fs.createReadStream(fileName).pipe(response);

}).listen(port);