const { writeFile, readFile } = require('fs').promises;

/*The writeFile() method returns a promise that resolves 
to undefined when the file is successfully written*/

/*The readFile() method returns a promise that resolves 
to undefined when the file is successfully read*/

writeFile('output.txt', 'Hello World\n')
    .then(() => writeFile('output.txt', 'Node.js\n', { flag: 'a' }))
    .then(() => writeFile('output.txt', 'Express\n', { flag: 'a' }))
    .then(() => readFile('output.txt', 'utf8'))
    .then((data) => console.log('File read successfully\n', data))
    .catch((err) => console.error('Error writing file: ', err));