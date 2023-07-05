const express = require('express');
const app = express();
const data = require('./controllers/data.js'); // Adjust the path as per your directory structure

const peopleRouter = require('./routes/people.js'); // Adjust the path as per your directory structure

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/people', peopleRouter); // Mount the peopleRouter


app.use(express.static('methods-public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



// // Import necessary modules
// const express = require('express');
// const data = require('./controllers/data.js');

// // Create an instance of the Express application
// const app = express();

// // Logger middleware function
// const logger = (req, res, next) => {
//     // Log method, URL, and time
//     console.log('Method: ${req.method}, URL: ${req.url}, Time: ${new Date().getFullYear()}');

//     // Call next() to move to the next middleware or route handler
//     next();
// };

// // Middleware to parse request bodies
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Get endpoint for api/v1/people
// app.get('/api/v1/people', logger, (req, res) => {
//     // Retrieve the people data from data module
//     const people = data.people;

//     // Return the people data as JSON
//     res.json(people);
// });

// // Post endpoint for api/v1/people
// app.post('/api/v1/people', logger, (req, res) => {
//     // Check if req.body.name exists
//     if (!req.body.name) {
//         // Return an error message if name is missing
//         return res.status(400).json({ success: false, msg: 'Please provide a name' });
//     }

//     // Retrieve the people data from data module
//     const people = data.people;

//     // Add a new entry to the people array
//     const newPerson = { id: people.length, name: req.body.name };
//     people.push(newPerson);

//     // Return a success message with the added person's name
//     res.status(201).json({ success: true, name: req.body.name });
// });

// // Serve the static files from the methods-public directory
// app.use(express.static('./methods-public'));


// // Use the logger middleware for specific routes using app.get()
// app.get('/', logger, (req, res) => {
//     // Your route handling code here
//     res.send('Hello, World!');
// });

// // Use the logger middleware for specific paths using app.use()
// app.use(['/path1', '/path2'], logger);

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is listening on port 3000...');
// });

// console.log('Express Tutorial')
