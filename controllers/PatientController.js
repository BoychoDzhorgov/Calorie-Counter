const Patient = require('../models/Patient');

exports.createPatient = async (req, res, next) => {
    const newPatient = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    };
    Patient.create(newPatient, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(404).json({
                message: 'Error creating patient',
                error: err,
            });
        }
        return res.status(201).json({ message: 'Patient created successfully' });
    });
};