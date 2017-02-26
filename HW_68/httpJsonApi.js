"use strict";

const http = require('http'),
    url = require('url');
var port = process.argv[2],
    json,
    data,
    date;


var server = http.createServer((request, response) => {
    data = url.parse(request.url, true);

    switch (data.pathname) {
        case '/api/parsetime':
            date = new Date(data.query.iso);

            json = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            break;

        case '/api/unixtime':
            json = {
                unixtime: (new Date(data.query.iso)).getTime()
            };
            break;
    }

    if (json) {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(json));
    } else {
        response.writeHead(404);
        response.end();
    }
}).listen(port);