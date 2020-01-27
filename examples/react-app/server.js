const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/:status', (req, res) => {
  res.status(Number(req.params.status)).send(null);
});

app.listen(8000, err => {
  if (err) throw err;
  console.log('Server listen on port 8000');
});
