const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Student_router = require('./Routers/StudentRouter.js');
const Speaker_router = require('./Routers/SpeakerRouter.js');
const Event_router = require('./Routers/EventsRouter.js');
const login = require('./Routers/AuththenticateRouter.js');
const Notfound = require('./middleware/NotFound.js');
const DB = require('./DataBase/DBConnection.js');
var cors = require('cors')
const Admin = require('./Models/Admin.js');
const Authenticate = require('./middleware/Authenticate.js');


const app = express();
app.use(cors());

DB.connect();
Admin();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logging middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// Autehtication middleware
app.use(login);
app.use(Authenticate);

// console.log(token);

//Routes middleware
app.get('/', (req, res) => {
    res.send('Hello to Event system API');
});
app.get('/api', (req, res) => {
    res.send('Hello to Event system API');
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