const FoodLog = require('../models/FoodLog')

exports.addFoodLog = (req, res, next) => {
    const newLog = {
        patient_id: req.body.patient_id,
        food_id: req.body.food_id,
        quantity: req.body.quantity,
        log_date: req.body.log_date,
    };
    FoodLog.create(newLog, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error creating food log',
                error: err,
            });
        }
        return res.status(201).json({ message: 'Food log created successfully' });
    });
};

exports.deleteFoodLog = (req, res, next) => {
    const id = req.params.id;
    FoodLog.delete(id, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error deleting food log',
                error: err,
            });
        }
        return res.status(200).json({ message: 'Food log deleted successfully' });
    });
};

exports.updateFoodLog = (req, res, next) => {
    const id = req.params.id;
    const updatedLog = {
      patient_id: req.body.patient_id,
      food_id: req.body.food_id,
      quantity: req.body.quantity,
      log_date: req.body.log_date,
    };
    FoodLog.update(id, updatedLog, function (err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Error updating food log',
          error: err,
        });
      }
      return res.status(200).json({ message: 'Food log updated successfully' });
    });
}