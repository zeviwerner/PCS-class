"use strict";

const http = require('http');
var info1 = [],
    info2 = [],
    info3 = [];
let url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4];

http.get(url1, (response) => {
    response.on('data', (data) => {
        info1.push(data);
    });
    response.on('error', console.error);
    response.on('end', () => {
        http.get(url2, (response) => {
            response.on('data', (data) => {
                info2.push(data);
            });
            response.on('error', console.error);
            response.on('end', () => {
                http.get(url3, (response) => {
                    response.on('data', (data) => {
                        info3.push(data);
                    });
                    response.on('error', console.error);
                    response.on('end', () => {
                        console.log(info1.join(''));
                        console.log(info2.join(''));
                        console.log(info3.join(''));
                    });
                });
            });
        });
    });
});