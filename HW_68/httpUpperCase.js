"use strict";

const http = require('http'),
    map = require('through2-map');
var port = process.argv[2];

var server = http.createServer((request, response) => {
    if(request.method === 'POST'){
        request.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
}).listen(port);



