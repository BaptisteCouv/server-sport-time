const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose') .Types.ObjectId;

const ListExo = require('../models/listExerciceModels');

router.get('/', (req, res) => {
    // ListExo.find((err, posts) => {
    //     if(!err) res.send(posts);
    //     else console.log("Error to get data : " + err);
    // })
    console.log(res)
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});

router.post('/', (req, res) => {
    console.log(req.body)
    const newRecords = new ListExerciceModels({
        ...req.body
    });
    newRecords.save((err, records) => {
        if(!err) res.send(records);
        else console.log("Error to creating data : " + err);
    });
})

module.exports = router;