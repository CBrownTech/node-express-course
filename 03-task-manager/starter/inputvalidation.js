const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

// Define validation schema for task creation
const taskCreationSchema = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().max(500),
});

// Validate task creation input
app.post('/tasks', (req, res) => {
  const { error, value } = taskCreationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Process the valid input and create the task
  const task = createTask(value.title, value.description);
  return res.status(201).json(task);
});

function createTask(title, description) {
  // Create the task using the provided title and description
  // ...
  return {
    id: 1,
    title,
    description,
  };
}
