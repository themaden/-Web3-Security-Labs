const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database(':memory:'); // In-memory database

app.use(bodyParser.json());

// Create the database
db.serialize(() => {
  db.run("CREATE TABLE users (username TEXT, email TEXT)");
  db.run("INSERT INTO users (username, email) VALUES ('admin', 'admin@example.com')");
});

// Vulnerable endpoint
app.post('/getUser', (req, res) => {
  const { username } = req.body;
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Secure endpoint
app.post('/getUserSecure', (req, res) => {
  const { username } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  db.all(query, [username], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
