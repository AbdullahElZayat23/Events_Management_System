const jwt = require('jsonwebtoken');
const admin = require("../Models/Admin");
const student = require("../Models/Student");
const speaker = require("../Models/Speaker");
const { CreateStudent } = require("../Controller/StudentController");
const { CreateSpeaker } = require("../Controller/SpeakerController");
const fs = require('fs');
const md5 = require('md5');

const privateKey = fs.readFileSync('privart.key.txt', { encoding: 'utf8', flag: 'r' });

module.exports.Adminlogin = (req, res, next) => {
    let token;
    //search in admin DB
    admin.findOne({ UserName: req.body.UserName, Password: req.body.Password }).then(data => {
        if (data) {
            token = jwt.sign({
                username: req.body.UserName,
                role: "Admin"
            }, privateKey, { expiresIn: '1h' });
            res.json({
                token: token,
                role: "Admin",
                id: data._id
            });
        } else {
            res.send({ message: "Not Authenticated" });
        }
    }).catch(err => {
        next(err);
    });

};

module.exports.Studentlogin = (req, res, next) => {
    let token;
    req.body.Password = md5(req.body.Password);
    student.findOne({ Email: req.body.Email, password: req.body.Password }).then(data => {
        if (data) {
            token = jwt.sign({
                Email: req.body.Email,
                role: "Student"
            }, privateKey, { expiresIn: '1h' });
            res.json({
                token: token,
                role: "Student",
                id: data._id
            });
        } else {
            res.send({ message: "Not Authenticated" });
        }
    }).catch(err => {
        next(err);
    });

    //search for student in DB   
};

module.exports.Speakerlogin = (req, res, next) => {
    let token;
    req.body.Password = md5(req.body.Password);
    speaker.findOne({ Email: req.body.Email, password: req.body.Password }).then(data => {
        if (data) {
            token = jwt.sign({
                username: req.body.UserName,
                role: "Speaker"
            }, privateKey, { expiresIn: '1h' });
            res.json({
                token: token,
                role: "Speaker",
                id: data._id
            });
        } else {
            res.send({ message: "Not Authenticated" });
        }
    }).catch(err => {
        next(err);
    });
}

module.exports.Studentregister = CreateStudent;
module.exports.Speakerregister = CreateSpeaker;