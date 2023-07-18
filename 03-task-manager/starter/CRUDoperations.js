const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

// Define validation schema for task creation
const taskCreationSchema = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().max(500),
});

let tasks = []; // Placeholder array to store tasks

// Validate task creation input and create a new task
app.post('/tasks', (req, res) => {
  const { error, value } = taskCreationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const task = createTask(value.title, value.description);
  return res.status(201).json(task);
});

// Retrieve all tasks
app.get('/tasks', (req, res) => {
  const allTasks = getAllTasks();
  return res.status(200).json(allTasks);
});

// Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = getTaskById(taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return res.status(200).json(task);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { error, value } = taskCreationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const updatedTask = updateTask(taskId, value.title, value.description);
  if (!updatedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return res.status(200).json(updatedTask);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const deletedTask = deleteTask(taskId);
  if (!deletedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return res.status(204).end();
});

// Function to create a new task
function createTask(title, description) {
  const task = {
    id: tasks.length + 1,
    title,
    description,
  };
  tasks.push(task);
  return task;
}

// Function to retrieve all tasks
function getAllTasks() {
  return tasks;
}

// Function to retrieve a task by ID
function getTaskById(taskId) {
  return tasks.find(task => task.id === parseInt(taskId));
}

// Function to update a task
function updateTask(taskId, title, description) {
  const task = getTaskById(taskId);
  if (!task) {
    return null;
  }
  task.title = title;
  task.description = description;
  return task;
}

// Function to delete a task
function deleteTask(taskId) {
  const index = tasks.findIndex(task => task.id === parseInt(taskId));
  if (index === -1) {
    return null;
  }
  const deletedTask = tasks[index];
  tasks.splice(index, 1);
  return deletedTask;
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
