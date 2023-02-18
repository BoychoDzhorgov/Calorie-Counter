const Patient = require('../models/Patient');

exports.createPatient = (req, res, next) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name
    
    Patient.create(firstName, lastName)
    
    return res.status(201).json({ message: 'Patient created successfully' });
};