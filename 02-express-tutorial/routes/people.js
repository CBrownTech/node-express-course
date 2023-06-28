const express = require('express');
const router = express.Router();
const { addPerson, getPeople, getPersonById, deletePerson } = require('../controllers/people.js'); // Adjust the path as per your directory structure

router.get('/', getPeople); // Call getPeople function for GET /api/v1/people
router.post('/', addPerson); // Call addPerson function for POST /api/v1/people

router.get('/:id', (req, res) => {
    const people = data.people;
    const id = parseInt(req.params.id);
  
    const person = people.find((p) => p.id === id);
  
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  });

  router.put('/:id', (req, res) => {
    const people = data.people;
    const id = parseInt(req.params.id);
  
    const person = people.find((p) => p.id === id);
  
    if (person) {
      person.name = req.body.name;
      res.json({ success: true, message: 'Person updated successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  });
  
  router.delete('/:id', (req, res) => {
    const people = data.people;
    const id = parseInt(req.params.id);
  
    const updatedPeople = people.filter((p) => p.id !== id);
  
    if (updatedPeople.length < people.length) {
      data.people = updatedPeople; // Update the data.people array
      res.json({ success: true, message: 'Person deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Person not found' });
    }
  });
  
module.exports = router;
