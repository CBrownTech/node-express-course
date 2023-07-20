const path = require('path');

const parts = ['dir', 'subdir', 'file.txt'];
const joinedPath = path.join(...parts);

console.log('Joined Path:', joinedPath);
