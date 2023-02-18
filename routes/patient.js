const express = require('express');
const PatientController = require('../controllers/PatientController');
const router = express.Router();

router.post('/patients', PatientController.createPatient);

module.exports = router;
