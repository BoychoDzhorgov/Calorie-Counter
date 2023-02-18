const express = require('express');
const FoodItemController = require('../controllers/FoodItemController');
const FoodLogsController = require('../controllers/FoodLogsController');
const router = express.Router();

router.post('/food-items', FoodItemController.createFood);

router.delete('/food-items/:id', FoodItemController.deleteFood);

router.post('/food-logs', FoodLogsController.addFoodLog);

router.put('/food-logs/:id', FoodLogsController.updateFoodLog);

router.delete('/food-logs/:id', FoodLogsController.deleteFoodLog);

module.exports = router;