"use strict";

var module = require('./module.js'),
    dir = process.argv[2],
    ext = '.' + process.argv[3];

module(dir, ext, (err, list) => {
    if (err) {
        return console.error(err);
    } else {
        list.forEach(function (file) {
            console.log(file);
        });
    }
});

//module(dir, fileExt, callBack);