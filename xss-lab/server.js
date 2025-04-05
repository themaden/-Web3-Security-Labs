const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Vulnerable endpoint
app.post('/submit', (req, res) => {
  const { comment } = req.body;
  res.send(`<h1>Your Comment</h1><p>${comment}</p>`); // XSS vulnerability
});

// Start the server
app.listen(3001, () => {
  console.log('XSS Lab server is running on port 3001');
});
