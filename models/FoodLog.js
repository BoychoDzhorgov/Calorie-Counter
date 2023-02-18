const db = require('../util/database');

module.exports = class FoodLog {
    constructor(patientId, foodItemId, dateConsumed, quantityConsumed) {
        this.patientId = patientId;
        this.foodItemId = foodItemId;
        this.dateConsumed = dateConsumed;
        this.quantityConsumed = quantityConsumed;
    }
    
    static create(patientId, foodId, quantityConsumed, consumedAt) {
        return new Promise((resolve, reject) => {
            if (!patientId || !foodId || !quantityConsumed || !consumedAt) {
                reject(new Error('All function arguments are required'));
                return;
            }
            let query = `INSERT INTO food_logs (patient_id, food_id, quantity, consumed_at) VALUES (?, ?, ?, ?)`;
            db.query(query, [patientId, foodId, quantityConsumed, consumedAt], (err, result) => {
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
            let query = `DELETE FROM food_logs WHERE id = ?`;
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    };
    
    static update(id, foodId, quantity, consumedAt) {
        return new Promise((resolve, reject) => {
            let query = `UPDATE food_logs SET food_id = ?, quantity = ?, consumed_at = ? WHERE id = ?`;
            db.query(query, [foodId, quantity, consumedAt, id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}