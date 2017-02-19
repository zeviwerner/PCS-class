"use strict";
const events = require('events'),
    eventEmitter = new events.EventEmitter();

eventEmitter.setMaxListeners(11);

eventEmitter.on('second', () => {
    setInterval(() => {
        console.log(new Date().toLocaleTimeString());
    }, 1000);
});

function readFile() {
    eventEmitter.emit('second');
}

readFile();