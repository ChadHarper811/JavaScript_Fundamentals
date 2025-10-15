import EventEmitter from "node:events";

const emitter = new EventEmitter();

// Add an event handler
emitter.on('hello', message => {
    console.log(`Event Handled: ${message}`);
});