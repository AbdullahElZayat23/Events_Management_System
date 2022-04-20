const mongoose = require('mongoose');
const autoINC = require('mongoose-sequence')(mongoose);

const Speaker_schema = new mongoose.Schema({
    _id: Number,
    Email: { type: String, unique: [true, 'Email already exists'] },
    UserName: String,
    password: String,
    address: {
        Street: String,
        City: String,
        Building: String,
    },
});

Speaker_schema.plugin(autoINC, { id: 'speaker_id_seq', inc_field: '_id' });
module.exports = mongoose.model('Speaker', Speaker_schema);