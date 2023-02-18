const FoodItem = require('../models//FoodItem');

exports.createFood = async (req, res, next) => {
    const name = req.body.name;
    const caloriePer100g = req.body.calories_per_100g;
    
    try {
        await FoodItem.create(name, caloriePer100g);
        res.status(201).json({ message: 'Food created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Food cannot be created' });
    }
};

exports.deleteFood = async (req, res, next) => {
    const id = req.params.id;
    try {
        await FoodItem.delete(id);
        return res.status(200).json({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Food cannot deleted' });
    }
};