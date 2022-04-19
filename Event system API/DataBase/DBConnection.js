const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/event-system').then(() => {
        console.log('Connected to Event-system MongoDB');
    }).catch(err => {
        console.log('Could not connect to MongoDB');
        console.log(err);
    });
}
module.exports = { connect };