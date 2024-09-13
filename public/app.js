// Fetch all animals
const fetchAnimals = () => {
    fetch('/animals')
      .then(res => res.json())
      .then(data => {
        const animalList = document.getElementById('animal-list');
        animalList.innerHTML = '';
        data.forEach(animal => {
          const li = document.createElement('li');
          li.textContent = `${animal.id}. ${animal.name} - ${animal.species}`;
          animalList.appendChild(li);
        });
      });
  };
  
  // Add a new animal
  document.getElementById('add-animal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const species = document.getElementById('species').value;
  
    fetch('/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, species })
    })
    .then(res => res.json())
    .then(() => {
      fetchAnimals();
      document.getElementById('add-animal-form').reset();
    });
  });
  
  // Update an existing animal
  document.getElementById('update-animal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('update-id').value;
    const name = document.getElementById('update-name').value;
    const species = document.getElementById('update-species').value;
  
    fetch(`/animals/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, species })
    })
    .then(res => res.json())
    .then(() => {
      fetchAnimals();
      document.getElementById('update-animal-form').reset();
    });
  });
  
  // Delete an animal
  document.getElementById('delete-animal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('delete-id').value;
  
    fetch(`/animals/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      fetchAnimals();
      document.getElementById('delete-animal-form').reset();
    });
  });
  
  // Initial fetch of all animals
  fetchAnimals();
  