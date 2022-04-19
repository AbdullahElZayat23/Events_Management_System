const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Student_router = require('./Routers/StudentRouter.js');
const Speaker_router = require('./Routers/SpeakerRouter.js');
const Event_router = require('./Routers/EventsRouter.js');
const Notfound = require('./middleware/NotFound.js');
const DB = require('./DataBase/DBConnection.js');
var cors = require('cors')
const Admin = require('./Models/Admin.js');

const app = express();
app.use(cors());

DB.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logging middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// Autehtication middleware

//Routes middleware
app.get('/', (req, res) => {
    res.send('Hello');
});
app.use(Student_router);
app.use(Speaker_router);
app.use(Event_router);

//Notfound middleware
app.use(Notfound);

//Error middleware
app.use((err, req, res) => {
    res.status(err.status || 500).send({
        error: {
            status: err.status || 500,
            message: err.message || "Internal Server Error",
        },
    })
});

let port = process.env.PORT || 1000;
app.listen(1000, () => console.log(`Server is listening on port ${port}.`));