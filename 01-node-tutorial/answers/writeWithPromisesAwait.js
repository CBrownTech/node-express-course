const { writeFile, readFile } = require('fs').promises;

async function writer() {
    try {
        await writeFile('output.txt', 'Hello World\n');
        await writeFile('output.txt', 'Node.js\n', { flag: 'a' });
        await writeFile('output.txt', 'Express\n', { flag: 'a' });
        console.log('File written successfully');
}   catch (err) {
        console.error('Error writing file: ', err);
    }
}

async function reader() {
    try {
        const data = await readFile('output.txt', 'utf8');
        console.log('File read successfully\n', data);
    } catch (err) {
        console.error('Error reading file: ', err);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();