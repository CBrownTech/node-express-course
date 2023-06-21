const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 200
});

let counter = 0;

stream.on('data', (chunk) => {
    counter++;
    console.log('Received chunk:', chunk);
});

stream.on('error', (err) => {
    console.error('An error occurred:', err);
});