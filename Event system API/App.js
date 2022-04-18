const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Student_Model = require('./Models/Student.js');
const Speaker_Model = require('./Models/Speaker.js');
const Event_Model = require('./Models/Event.js');
const Student_router = require('./Routers/StudentRouter.js');
const Speaker_router = require('./Routers/SpeakerRouter.js');
const Event_router = require('./Routers/EventsRouter.js');
var cors = require('cors')

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/event-system').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Could not connect to MongoDB');
    console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logging middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Autehtication middleware

//Routes middleware
app.use(Student_router);
app.use(Speaker_router);
app.use(Event_router);

//Notfound middleware
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: 'Not found'
    })
});

//Error middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        error: {
            status: err.status || 500,
            message: err.message || "Internal Server Error",
        },
    })
});


let port = process.env.PORT || 1000;
app.listen(1000, () => console.log(`Server is listening on port ${port}.`));