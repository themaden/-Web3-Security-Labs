const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Vulnerable endpoint
app.post('/transfer', (req, res) => {
  const { amount } = req.body;
  res.send(`Transferred ${amount} successfully!`); // CSRF vulnerability
});

// Start the server
app.listen(3002, () => {
  console.log('CSRF Lab server is running on port 3002');
});
