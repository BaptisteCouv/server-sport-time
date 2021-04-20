const mongoose = require('mongoose');

const listExerciceModels = new mongoose.Schema(
    {
        titre: {type: String, require: true},
        codeExo: {type: String, require: true},
        isComplet: {type: Boolean, require: true},
        date: {type: Date, default: Date.now,require: true},
    }
);

module.exports = mongoose.model('ListExo', listExerciceModels);