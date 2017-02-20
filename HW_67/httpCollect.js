"use strict";

const http = require('http');
var info = [],
    url = process.argv[2];

http.get(url, function (response) {
    response.on('data', function (data) {
        info.push(data);
    });
    response.on('error', console.error);
    response.on('end', function () {
        console.log(info.join('').length);
        console.log(info.join(''));
    });
});