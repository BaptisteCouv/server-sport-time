const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const addExercices = require('./routes/AddExerciceController.js');
const listeExercices = require('./routes/exerciceController.js');

require('./models/dataBaseConfig');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// parse application/json
app.use(bodyParser.json())

app.use('/addExercice', addExercices);

app.use('/listExercice', listeExercices);

app.listen(3000, function () {
    console.log('server started: 3000');
});