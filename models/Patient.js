const db = require('../util/database');

module.exports = class Patient {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static create(firstName, lastName) {
        return new Promise((resolve, reject) => {
            if (!firstName || !lastName) {
                reject(new Error('firstName and lastName are required'));
                return;
            }
            let query = `INSERT INTO patients (first_name, last_name) VALUES (?, ?)`;
            db.query(query, [firstName, lastName], (err, result) => {
                if (err) {
                    reject(err)
                };
                resolve(result.insertId);
            });
        });
    };
}