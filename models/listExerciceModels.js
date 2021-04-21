const mongoose = require('mongoose');

const ListExerciceModels = mongoose.model(
    "listExercice",
    {
        titre: {type: String, require: true},
        codeExo: {type: String, require: true},
        isComplet: {type: Boolean, require: true},
        date: {type: Date, default: Date.now,require: true},
    }
);

module.exports = {ListExerciceModels};