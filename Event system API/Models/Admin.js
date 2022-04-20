const mongoose = require('mongoose');


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
//create admin
AdminDB.findById(1).then((data) => {
    if (!data) {
        admin.save();
        console.log('admin created');
    }
});

module.exports = AdminDB;