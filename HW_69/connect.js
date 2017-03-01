"use strict";

const connect = require('connect'),
    app = connect();

app.use('/index', (req, res, next) => {
    res.end('Hello World');
});

app.listen(80);