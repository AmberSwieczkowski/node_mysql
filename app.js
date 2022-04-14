const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root'
    // password: '123456'
    // database: 'nodemysql'
});

// Connect
db.connect((error) => {
    if (error) { throw error };
    console.log('MySql Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (error, result) => {
        if (error) { throw error };
        console.log(result);
    });
    res.send('Database Created...');
});

app.listen('3000', () => {
    console.log('Server started on port 3000...');
});


