const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let animals = [
  { id: 1, name: 'Lion', species: 'Panthera leo' },
  { id: 2, name: 'Elephant', species: 'Loxodonta' }
];

// GET - Retrieve all animals
app.get('/animals', (req, res) => {
  res.json(animals);
});

// POST - Add a new animal
app.post('/animals', (req, res) => {
  const newAnimal = {
    id: animals.length + 1,
    name: req.body.name,
    species: req.body.species
  };
  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

// PUT - Update an existing animal
app.put('/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const animalIndex = animals.findIndex((animal) => animal.id === id);

  if (animalIndex !== -1) {
    animals[animalIndex] = {
      id: id,
      name: req.body.name,
      species: req.body.species
    };
    res.json(animals[animalIndex]);
  } else {
    res.status(404).send('Animal not found');
  }
});

// DELETE - Remove an animal
app.delete('/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const animalIndex = animals.findIndex((animal) => animal.id === id);

  if (animalIndex !== -1) {
    animals.splice(animalIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Animal not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
