const db = require('../util/database');

module.exports = class Food {
    constructor(name, caloriesPer100g) {
        this.name = name;
        this.caloriesPer100g = caloriesPer100g;
    }
    
    static create(name, caloriesPer100g) {
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO foods (name, calories_per_100g) VALUES (?, ?)`;
            db.query(query, [name, caloriesPer100g], (err, result) => {
                if (err) reject(err);
                resolve(result.insertId);
            });
        });
    };
    
    static delete(id) {
        return new Promise((resolve, reject) => {
            let query = `UPDATE foods SET deleted_at = NOW() WHERE id = ?`;
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}