// on ajoute dans se fichier tous ce qui touche la bdd
const mongoose = require('mongoose'); 

mongoose.connect(
    "mongodb+srv://dbUser:123soleil@cluster0.0mupx.mongodb.net/sport-time?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) console.log("MongoDB connected");
        else console.log("Connection error :" + err);
    }
);