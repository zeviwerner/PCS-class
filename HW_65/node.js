'use strict';
const fs = require('fs');


fs.readFile('node.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
       console.log(data.toString().split("").reverse().join(""));
    }
});
