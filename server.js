const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run('CREATE TABLE users (first_name TEXT, last_name TEXT, email TEXT, pass TEXT)');
    db.run('CREATE TABLE comments (name TEXT, email TEXT, comment TEXT)');
});

app.post('/register', (req, res) => {
    const { first_name, last_name, email, pass } = req.body;
    db.run('INSERT INTO users (first_name, last_name, email, pass) VALUES (?, ?, ?, ?)', [first_name, last_name, email, pass], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: 'User registered successfully' });
    });
});

app.post('/login', (req, res) => {
    const { email, pass } = req.body;
    db.get('SELECT * FROM users WHERE email = ? AND pass = ?', [email, pass], (err, row) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (row) {
            res.json({ message: 'Login successful', user: row });
        } else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    });
});

app.post('/comment', (req, res) => {
    const { name, email, comment } = req.body;
    db.run('INSERT INTO comments (name, email, comment) VALUES (?, ?, ?)', [name, email, comment], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: 'Comment added successfully' });
    });
});

app.get('/comments', (req, res) => {
    db.all('SELECT * FROM comments', [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
