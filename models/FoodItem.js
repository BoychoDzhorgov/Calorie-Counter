const db = require('../util/database');

module.exports = class Food {
    constructor(name, caloriesPer100g) {
        this.name = name;
        this.caloriesPer100g = caloriesPer100g;
    }
    
    static create(name, caloriesPer100g) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO foods (name, calories_per_100g) VALUES (?, ?)', [name, caloriesPer100g], (err, result) => {
                if (err) reject(err);
                resolve(result.insertId);
            });
        });
    };
    
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE foods SET deleted_at = NOW() WHERE id = ?', [id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}