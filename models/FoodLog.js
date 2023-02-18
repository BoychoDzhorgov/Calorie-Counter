const db = require('../util/database');

module.exports = class FoodLog {
    constructor(patientId, foodItemId, dateConsumed, quantityConsumed) {
        this.patientId = patientId;
        this.foodItemId = foodItemId;
        this.dateConsumed = dateConsumed;
        this.quantityConsumed = quantityConsumed;
    }
    
    static create (patientId, foodId, quantityConsumed, consumedAt) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO food_logs (patient_id, food_id, quantity, consumed_at) VALUES (?, ?, ?, ?)', [patientId, foodId, quantityConsumed, consumedAt], (err, result) => {
                if (err) reject(err);
                resolve(result.insertId);
            });
        });
    };
    
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM food_logs WHERE id = ?', [id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    };
    
    static update(id, quantity, consumedAt) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE food_logs SET quantity = ?, consumed_at = ? WHERE id = ?', [quantity, consumedAt, id], (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}