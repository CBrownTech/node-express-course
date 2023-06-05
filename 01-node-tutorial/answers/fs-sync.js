const fs = require('fs');

const filePath = './temporary/fileA.txt';

// Concatenate lines and write them to the file
const lines = 'Line 1\n' + 'Line 2\n' + 'Line 3\n';
fs.writeFileSync(filePath, lines);

// Read the file and log its contents
const fileContents = fs.readFileSync(filePath, 'utf8');
console.log('File Contents:');
console.log(fileContents);
