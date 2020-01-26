const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/http-errors.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.js'));
});

app.get('/:status', (req, res) => {
  res.status(Number(req.params.status)).send(null);
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Server listen on port 3000');
});
