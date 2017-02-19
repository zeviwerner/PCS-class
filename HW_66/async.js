"use strict";

const fs = require('fs');
var file = process.argv[2];

fs.readFile(file, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString().split('\n').length-1);
    }
});
