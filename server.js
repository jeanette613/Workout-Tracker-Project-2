require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');

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

const resistanceSchema = new Schema({
    name: String,
    muscleGroup: String,
    reps: Number,
    sets: Number,
});

const Resistance = model('Resistance', resistanceSchema);

const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server running')
})

app.get('/resistance/seed', (req, res) => {
    const startResistance = [
        { name: "Squat", muscleGroup: "legs", reps: 8, sets: 4 },
        { name: "Bench", muscleGroup: "shoulders", reps: 8, sets: 4 },
    ]

    //Delete all 
    Resistance.deleteMany({}).then((data) => {
        Resistance.create(startResistance).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/resistance', (req, res) => {
    res.send('hi');
});

app.get('/resistance', (req, res) => {
    Resistance.find({})
        .then((resistance) => {
            res.render('resistance/Index', { resistance })
        })
        .catch((error) => {
            res.status(400).jason({ error })
        })
})


const PORT = process.env.PORT
app.listen(PORT, () => console.log('Port is on'))