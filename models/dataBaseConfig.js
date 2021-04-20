// on ajoute dans se fichier tous ce qui touche la bdd
const mongoose = require('mongoose'); 

mongoose.connect(
    "mongodb+srv://Busers:123soleil@cluster0.0t4vz.mongodb.net/sport-time?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) console.log("MongoDB connected");
        else console.log("Connection error :" + err);
    }
);