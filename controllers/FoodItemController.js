const FoodItem = require('../models//FoodItem');

exports.createFood = (req, res, next) => {
    const name = req.body.name;
    const caloriePer100g = req.body.calories_per_100g;
    
    FoodItem.create(name, caloriePer100g);

    return res.status(201).json({ message: 'Food created successfully' });
};

exports.deleteFood = (req, res, next) => {
    const id = req.params.id;
    FoodItem.delete(id);

    return res.status(200).json({ message: 'Food deleted successfully' });
};