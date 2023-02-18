const FoodLog = require('../models/FoodLog')

exports.addFoodLog = async (req, res, next) => {
    const patientId = req.body.patient_id;
    const foodId = req.body.food_id;
    const quantity = req.body.quantity;
    const logDate = req.body.log_date;
    try {
        await FoodLog.create(patientId, foodId, quantity, logDate);
        return res.status(201).json({ message: 'Food log created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Food log cannot be created' });
    }
};

exports.deleteFoodLog = async (req, res, next) => {
    const id = req.params.id;
    try {
        await FoodLog.delete(id);
        return res.status(200).json({ message: 'Food log deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Food log cannot be deleted' });
    }
};

exports.updateFoodLog = async (req, res, next) => {
    const id = req.params.id;
    const foodId = req.body.food_id;
    const quantity = req.body.quantity;
    const logDate = req.body.log_date;
    try {
        await FoodLog.update(id, foodId, quantity, logDate);
        return res.status(200).json({ message: 'Food log updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Food log cannot be updated' });
    }
}