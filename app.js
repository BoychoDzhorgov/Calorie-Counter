const express = require('express');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/food');
const patientRoutes = require('./routes/patient');

const app = express();

app.use(bodyParser.json());

app.use(patientRoutes);
app.use(foodRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello!' });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});