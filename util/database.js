const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'calorie-counter',
    password: 'pass@2023'
});

module.exports = connection; 