require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const res = require('express/lib/response');

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', (error) => console.log(error));

const { Schema, model } = mongoose;

const exercisesSchema = new Schema({
    name: String,
    muscleGroup: String,
    reps: Number,
    sets: Number,
});

const Exercise = model('Exercise', exercisesSchema);

const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server running');
});

app.get('/exercises/seed', (req, res) => {
    const startExercises = [
        { name: "Squat", muscleGroup: "legs", reps: 8, sets: 4 },
        { name: "Bench", muscleGroup: "shoulders", reps: 8, sets: 4 },
    ];

    //Delete all 
    Exercise.deleteMany({}).then((data) => {
        Exercise.create(startExercises).then((data) => {
            res.json(data);
        });
    });
});

//Index route
app.get('/exercises', (req, res) => {
    Exercise.find({})
        .then((exercises) => {
            res.render('exercises/Index', { exercises });
        })
        .catch((error) => {
            res.json({ error });
        });
});

//create route
app.post("/exercises", (req, res) => {
    //req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    // create the New fruit
    Exercise.create(req.body)
        .then((exercises) => {
            // redirect user to Index page if successfully created item
            res.redirect("/exercises");
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

//New route
app.get('/exercises/New', (req, res) => {
    res.render('exercises/New');
});

//Edit route
app.get('exercises/:id/Edit', (req, res) => {
    const id = req.params.id;
    Exercise.findById(id)
        .then((exercise) => {
            res.render('exercises/Edit.jsx', { exercise });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

//show route
app.get('/exercises/:id', (req, res) => {
    const id = req.params.id;

    Exercise.findById(id)
        .then((exercise) => {
            res.render('exercises/Show', { exercise });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log('Port is on'))