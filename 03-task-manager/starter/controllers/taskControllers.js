const Joi = require('joi');
let tasks = []; // Placeholder array to store tasks

// Define validation schema for task creation
const taskCreationSchema = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().max(500),
});

// Controller functions
function createTask(req, res) {
  const { error, value } = taskCreationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const task = {
    id: tasks.length + 1,
    title: value.title,
    description: value.description,
  };
  tasks.push(task);
  return res.status(201).json(task);
}

function getAllTasks(req, res) {
  return res.status(200).json(tasks);
}

function getTaskById(req, res) {
  const taskId = req.params.id;
  const task = tasks.find(task => task.id === parseInt(taskId));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return res.status(200).json(task);
}

function updateTask(req, res) {
  const taskId = req.params.id;
  const { error, value } = taskCreationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const task = tasks.find(task => task.id === parseInt(taskId));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  task.title = value.title;
  task.description = value.description;
  return res.status(200).json(task);
}

function deleteTask(req, res) {
  const taskId = req.params.id;
  const index = tasks.findIndex(task => task.id === parseInt(taskId));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const deletedTask = tasks[index];
  tasks.splice(index, 1);
  return res.status(204).end();
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
