const EventEmitter = require('events');

const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit('timer', 'hi there');
}, 2000);

emitter.on('timer', (message) => {
    console.log('Timer event:', message);
});

// const waitForEvent = () => {
//     return new Promise((resolve) => {
//         emitter.on('happens', (msg) => resolve(msg));
//     });
// };

// const doWait = async () => {
//     const msg = await waitForEvent();
//     console.log('Event happened:', msg);
// };

// doWait();
// emitter.on('happens', 'This is a message.');