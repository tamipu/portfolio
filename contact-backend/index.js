const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up SQLite database
const db = new sqlite3.Database('./contacts.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT
        )`);
    }
});

// POST route to handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    const sql = `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`;

    db.run(sql, [name, email, message], function(err) {
        if (err) {
            return res.status(500).json({ message: 'Error saving contact' });
        }
        res.status(201).json({ message: 'Contact saved successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
