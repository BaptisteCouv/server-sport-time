const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose') .Types.ObjectId;

const { ExerciceModels } = require('../models/exerciceModels');

router.get('/', (req, res) => {
    ExerciceModels.find((err, posts) => {
        if(!err) res.send(posts);
        else console.log("Error to get data : " + err);
    })
});

router.post('/', (req, res) => {
    console.log(req.body)
    const newRecords = new ExerciceModels({
        ...req.body
    });
    newRecords.save((err, records) => {
        if(!err) res.send(records);
        else console.log("Error to creating data : " + err);
    });
})

module.exports = router;