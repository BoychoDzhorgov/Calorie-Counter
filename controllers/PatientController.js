const Patient = require('../models/Patient');

exports.createPatient = async (req, res, next) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name
    try {
        await Patient.create(firstName, lastName)
        return res.status(201).json({ message: 'Patient created successfully' });  
    } catch (error) {
        res.status(500).json({ message: 'Patient cannot be created' });
    }
};