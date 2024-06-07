const express = require('express');
const path = require('path');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.listen(HTTP_PORT, () => {
  console.log(`Server listening on port ${HTTP_PORT}`);
});
