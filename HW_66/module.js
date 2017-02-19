module.exports = function (dir, fileExt, callBack) {
    "use strict";
    const fs = require('fs'),
        path = require('path');
        var results = [];

    fs.readdir(dir, (err, list) => {
        if (err) {
            return callBack(err);
        } else {
            for (let i = 0; i < list.length; i++) {
                let fileName = list[i];
                if (path.extname(fileName) === fileExt) {
                    results.push(fileName[i]);
                }
                return callBack(null,list);
            }
        }
    });
};
