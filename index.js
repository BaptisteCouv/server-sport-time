const express = require('express');
const app = express();
const bodyParser = require('body-parser')


require('./models/dataBaseConfig');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// parse application/json
app.use(bodyParser.json())

const addExercices = require('./routes/AddExerciceController.js');
app.use('/listExercices', addExercices);

const listeExercices = require('./routes/exerciceController.js');
app.use('/listExercice', listeExercices);

app.listen(3000, function () {
    console.log('server started: 3000');
});