const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const data = JSON.parse(fs.readFileSync('data.json'));

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const entry = data.find(item => item.id === id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: 'Entry not found' });
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
