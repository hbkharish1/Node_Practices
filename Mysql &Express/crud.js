const express = require('express');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

// initialize express app
const app = express();

// create a route for the API
app.get('/users', (req, res) => {
  // query the database for all users
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
app.post('/create', (req, res) => {
  const user = req.body;
  connection.query(`INSERT INTO users (name, email) VALUES ('${user.name}', '${user.email}')`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ message: 'User created successfully' });
    }
  });
});
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results[0]);
    }
  });
});
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  connection.query(`UPDATE users SET name = '${user.name}', email = '${user.email}' WHERE id = ${id}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ message: 'User updated successfully' });
    }
  });
});
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM users WHERE id = ${id}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ message: 'User deleted successfully' });
    }
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});





