const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Speaker_schema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    Email: { type: String, unique: [true, 'Email already exists'] },
    UserName: String,
    password: String,
    address: {
        Street: String,
        City: String,
        Building: String,
    },
});
module.exports = mongoose.model('Speaker', Speaker_schema);