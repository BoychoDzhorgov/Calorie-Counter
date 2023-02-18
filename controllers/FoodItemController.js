const FoodItem = require('../models//FoodItem');

exports.createFood = async (req, res, next) => {
    const newFood = {
        name: req.body.name,
        calories_per_100g: req.body.calories_per_100g,
    };
    FoodItem.create(newFood, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error creating food',
                error: err,
            });
        }
        return res.status(201).json({ message: 'Food created successfully' });
    });
};

exports.deleteFood = async (req, res, next) => {
    const id = req.params.id;
    food.delete(id, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error deleting food',
                error: err,
            });
        }
        return res.status(200).json({ message: 'Food deleted successfully' });
    });
};