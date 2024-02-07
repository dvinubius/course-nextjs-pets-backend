const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

// ----- THE PETS -----

const pets = [
  {
    name: 'Fluffy',
    description: 'A very fluffy cat',
  },
  {
    name: 'Fido',
    description: 'A very loyal dog',
  },
  {
    name: 'Goldie',
    description: 'A very golden fish',
  },
  {
    name: 'Squawkie',
    description: 'A very squawky parrot',
  },
  {
    name: 'Bun-Bun',
    description: 'A very hoppy rabbit',
  },
];

// ----- ------------- -----


app.get('/api/v1/pet', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  res.json({data: pets});
});

app.post('/api/v1/pet', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const newPet = req.body;
  if (!newPet.name || !newPet.description) {
    res.status(400).json({data: {
      message: 'Name and description are required',
    }});
    return;
  }
  if (pets.some(pet => pet.name === newPet.name)) {
    res.status(400).json({data: {
      message: 'Pet already exists',
    }});
    return;
  }
  pets.push(newPet);
  res.json({data: {
    message: 'Pet added!',
    data: pets,
  }});
});

app.delete('/api/v1/pet/:name', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const name = req.params.name;
  const index = pets.findIndex(pet => pet.name === name);
  if (index === -1) {
    res.status(404).json({data: {
      message: 'Pet not found',
    }});
  } else {
    pets.splice(index, 1);
    res.json({data: {
      message: 'Pet deleted!',
      data: pets,
    }});
  }
});


// --- robots.txt support for heroku deployment ---

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

// --- ------------- ---



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});