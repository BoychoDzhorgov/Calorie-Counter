const db = require('../util/database');

module.exports = class Patient {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static create(firstName, lastName) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO patients (first_name, last_name) VALUES (?, ?)', [firstName, lastName], (err, result) => {
                if (err) reject(err);
                resolve(result.insertId);
            });
        });
    };
}