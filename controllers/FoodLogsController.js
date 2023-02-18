const FoodLog = require('../models/FoodLog')

exports.addFoodLog = (req, res, next) => {
    const patientId = req.body.patient_id;
    const foodId = req.body.food_id;
    const quantity = req.body.quantity;
    const logDate = req.body.log_date;
    FoodLog.create(patientId, foodId, quantity, logDate);
        
    return res.status(201).json({ message: 'Food log created successfully' });
};

exports.deleteFoodLog = (req, res, next) => {
    const id = req.params.id;
    FoodLog.delete(id);

    return res.status(200).json({ message: 'Food log deleted successfully' });
};

exports.updateFoodLog = (req, res, next) => {
    const id = req.params.id;
    const foodId = req.body.food_id;
    const quantity = req.body.quantity;
    const logDate = req.body.log_date;
    FoodLog.update(id, foodId, quantity, logDate);
    
    return res.status(200).json({ message: 'Food log updated successfully' });
}