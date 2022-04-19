const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin_schema = new mongoose.Schema({
    _id: Number,
    UserName: String,
    PassWord: String,
});

const AdminDB = mongoose.model('Admin', Admin_schema);
let admin = new AdminDB({
    _id: 1,
    UserName: 'admin',
    PassWord: 'admin',
});
AdminDB.findById(1, (err, admin) => {
    if (err) {
        admin.save();
    }
});
module.exports = AdminDB;