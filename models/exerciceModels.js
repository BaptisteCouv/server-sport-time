const mongoose = require('mongoose');

const ExerciceModels = mongoose.model(
    "exercice",
    {
        codeExercice: {type: String, require: true},
        titre: {type: String, require: true},
        nbRepetition: {type: String, require: true},
        nbTemps: {type: String, require: true},
        images: {type: String, require: true},
        tempsRepos: {type: String, require: true},
        numExo: {type: Number, require: true},
    },
);

module.exports = { ExerciceModels };