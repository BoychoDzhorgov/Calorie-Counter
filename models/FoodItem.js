const db = require('../util/database');

module.exports = class Food {
    constructor(name, caloriesPer100g) {
        this.name = name;
        this.caloriesPer100g = caloriesPer100g;
    }
    
    static create(name, caloriesPer100g) {
        return new Promise((resolve, reject) => {
            if (!name || !caloriesPer100g) {
                reject(new Error('Name and caloriesPer100g are required'));
                return;
            }
            let query = `INSERT INTO foods (name, calories_per_100g) VALUES (?, ?)`;
            db.query(query, [name, caloriesPer100g], (err, result) => {
                if (err) reject(err);
                resolve(result.insertId);
            });
        });
    };
    
    static delete(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                reject(new Error(`There is no item with id: ${id}`));
                return;
            }
            let query = `UPDATE foods SET deleted_at = NOW() WHERE id = ?`;
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}