const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// Use the task routes
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// const { MongoClient, ObjectID } = require('mongodb');
// const express = require('express');
// const app = express();


// // Middleware example: Log incoming requests
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

// const url = 'mongodb+srv:
// const dbName = 'sample_geospatial';

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }

//   // Get the database instance
//   const db = client.db(dbName);

//   // Create a collection for tasks
//   const tasksCollection = db.collection('tasks');

//   // Routes and request handlers

//   // GET all tasks
//   app.get('/tasks', (req, res) => {
//     tasksCollection.find({}).toArray((err, tasks) => {
//       if (err) {
//         console.error('Error fetching tasks:', err);
//         res.status(500).json({ error: 'Error fetching tasks' });
//         return;
//       }
//       res.json(tasks);
//     });
//   });

//   // GET a single task
//   app.get('/tasks/:id', (req, res) => {
//     const taskId = req.params.id;
//     tasksCollection.findOne({ _id: ObjectID(taskId) }, (err, task) => {
//       if (err) {
//         console.error('Error fetching task:', err);
//         res.status(500).json({ error: 'Error fetching task' });
//         return;
//       }
//       if (!task) {
//         res.status(404).json({ error: 'Task not found' });
//         return;
//       }
//       res.json(task);
//     });
//   });

//   // POST a new task
//   app.post('/tasks', (req, res) => {
//     const { title, description } = req.body;
//     const newTask = { title, description };

//     tasksCollection.insertOne(newTask, (err, result) => {
//       if (err) {
//         console.error('Error creating task:', err);
//         res.status(500).json({ error: 'Error creating task' });
//         return;
//       }
//       res.status(201).json(result.ops[0]);
//     });
//   });

//   // PUT/UPDATE an existing task
//   app.put('/tasks/:id', (req, res) => {
//     const taskId = req.params.id;
//     const updatedTask = req.body;

//     tasksCollection.updateOne(
//       { _id: ObjectID(taskId) },
//       { $set: updatedTask },
//       (err, result) => {
//         if (err) {
//           console.error('Error updating task:', err);
//           res.status(500).json({ error: 'Error updating task' });
//           return;
//         }
//         if (result.modifiedCount === 0) {
//           res.status(404).json({ error: 'Task not found' });
//           return;
//         }
//         res.json({ message: 'Task updated successfully' });
//       }
//     );
//   });

//   // DELETE a task
//   app.delete('/tasks/:id', (req, res) => {
//     const taskId = req.params.id;

//     tasksCollection.deleteOne({ _id: ObjectID(taskId) }, (err, result) => {
//       if (err) {
//         console.error('Error deleting task:', err);
//         res.status(500).json({ error: 'Error deleting task' });
//         return;
//       }
//       if (result.deletedCount === 0) {
//         res.status(404).json({ error: 'Task not found' });
//         return;
//       }
//       res.json({ message: 'Task deleted successfully' });
//     });
//   });

//   // Start the server
//   const port = 3000;
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });


// const { MongoClient } = require('mongodb');
// const express = require('express');

// // Create Express app
// const app = express();

// // Middleware example: Log incoming requests
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

// // Connection URL
// const url = 'mongodb://localhost:

// // Database Name
// const dbName = 'task-manager';

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }

//   // Get the database instance
//   const db = client.db(dbName);

//   // Example: query the tasks collection
//   const tasks = db.collection('tasks');
//   tasks.find({}).toArray((err, result) => {
//     if (err) {
//       console.error('Error querying tasks:', err);
//       return;
//     }

//     console.log('Tasks:', result);
//   });
// });

// // Challenges

// // Array of names
// const names = [
//   'Dimitry SantiAgo',
//   'Carlos d. Perez',
//   'tam  person',
//   'Mariana Gomez',
//   'Amy You'
// ];

// // Challenge 1: Create a new array with only each person's last name
// const lastNames = names.map((name) => {
//   const fullName = name.trim();
//   const lastName = fullName.split(' ').pop();
//   return lastName;
// });
// console.log('Last Names:', lastNames);

// // Challenge 2: Filter names that don't match the format "<first> <last>"
// const validNames = names.filter((name) => {
//   const fullName = name.trim();
//   const nameParts = fullName.split(' ');
//   return nameParts.length === 2 && !nameParts.some((part) => part.includes('_') || part.includes('-') || part.includes('\n'));
// });
// console.log('Valid Names:', validNames);

// // Challenge 3: Create a new array with names converted to "Title Case"
// const titleCaseNames = validNames.map((name) => {
//   const nameParts = name.trim().toLowerCase().split(' ');
//   const capitalizedParts = nameParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1));
//   return capitalizedParts.join(' ');
// });
// console.log('Title Case Names:', titleCaseNames);

// // Challenge 4: Remove names with the wrong format, convert to "Title Case," and remove names with last name ending in 'z'
// const filteredNames = names
//   .filter((name) => {
//     const fullName = name.trim();
//     const nameParts = fullName.split(' ');
//     return nameParts.length === 2 && !nameParts.some((part) => part.includes('_') || part.includes('-') || part.includes('\n'));
//   })
//   .filter((name) => !name.trim().toLowerCase().endsWith('z'))
//   .map((name) => {
//     const nameParts = name.trim().toLowerCase().split(' ');
//     const capitalizedParts = nameParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1));
//     return capitalizedParts.join(' ');
//   });
// console.log('Filtered Names:', filteredNames);

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// console.log('Task Manager App')
