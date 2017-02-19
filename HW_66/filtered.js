"use strict";

const fs = require('fs'),
    path = require('path');

var dir = process.argv[2],
    ext = '.' + process.argv[3];


fs.readdir(dir, (err, list) => {
    if (err) {
        console.error(err);
    } else {
        for (let i = 0; i < list.length; i++) {
            let fileName = list[i];
            if (path.extname(fileName) === ext) {
                console.log(fileName);
            }
        }
    }
});