const fs = require('fs');

var file = process.argv[2];
const fileContents = fs.readFileSync(file);

var line = fileContents.toString().split('\n');
console.log(line.length-1);