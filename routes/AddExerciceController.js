const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose') .Types.ObjectId;

const { ExerciceModels } = require('../models/exerciceModels');

// router.get('/', (req, res) => {
//     ExerciceModels.find((err, posts) => {
//         if(!err) res.send(posts);
//         else console.log("Error to get data : " + err);
//     })
// });

router.get('/:codeExercice', (req, res) => {
    ExerciceModels.find({codeExercice: req.params.codeExercice}, (err, posts) => {
        console.log(posts)
        if(!err) res.send(posts);
        else console.log("Error to get data : " + err);
    })
});

router.post('/', (req, res) => {
    console.log(res.body)
    const test = new ExerciceModels({
        ...req.body
    });
    test.save((err, records) => {
        if(!err) res.send(records);
        else console.log("Error to creating data : " + err);
    });
})

module.exports = router;