const data = require('../controllers/data.js'); // Adjust the path as per your directory structure

// Function to add a person
const addPerson = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ success: false, message: 'Please provide a name' });
  }

  const people = data.people;
  const newPerson = { id: people.length, name: req.body.name };
  people.push(newPerson);

  res.status(201).json({ success: true, name: req.body.name });
};

// Function to get all people
const getPeople = (req, res) => {
  const people = data.people;
  res.json(people);
};

// Function to get a specific person by id
const getPersonById = (req, res) => {
    const people = data.people;
    const id = parseInt(req.params.id);
  
    const person = people.find((p) => p.id === id);
  
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  };

// Function to delete a person by id
const deletePerson = (req, res) => {
    const people = data.people;
    const id = parseInt(req.params.id);
  
    const updatedPeople = people.filter((p) => p.id !== id);
  
    if (updatedPeople.length < people.length) {
      data.people = updatedPeople; // Update the data.people array
      res.json({ success: true, message: 'Person deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  };

module.exports = { addPerson, getPeople, getPersonById, deletePerson};
