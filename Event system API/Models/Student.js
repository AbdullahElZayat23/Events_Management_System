const mongoose = require('mongoose');
const autoINC = require('mongoose-sequence')(mongoose);


const Student_schema = new mongoose.Schema({
    _id: Number,
    Email: { type: String, unique: [true, 'Email already exists'] },
    password: String
});
Student_schema.plugin(autoINC, { id: 'student_id_seq', inc_field: '_id' });
module.exports = mongoose.model('Student', Student_schema);