const { writeFile } = require('fs');

console.log('at start');

// The flag 'a' means append (old data will be preserved)

writeFile('./temporary/fileB.txt', 'This is line 1\n', (err) => {
  if (err) {
    console.log('This error happened:', err);
  } else {
    console.log('Line 1 has been written to the file.');

    writeFile('./temporary/fileB.txt', 'This is line 2\n', { flag: 'a' }, (err) => {
      if (err) {
        console.log('This error happened:', err);
      } else {
        console.log('Line 2 has been appended to the file.');

        writeFile('./temporary/fileB.txt', 'This is line 3\n', { flag: 'a' }, (err) => {
          if (err) {
            console.log('This error happened:', err);
          } else {
            console.log('Line 3 has been appended to the file.');
            console.log('File write operation completed successfully.');
          }
        });
      }
    });
  }
});

console.log('at end');

/*The statements in the console.log() functions will be executed first, because they are not part of the asynchronous operation. 
The statements in the callback functions will be executed later, when the asynchronous operation is completed.*/
