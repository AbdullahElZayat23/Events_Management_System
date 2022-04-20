const Student = require("../Models/Student");
const { body, validationResult } = require('express-validator');
const md5 = require("md5");

module.exports.GetAllStudents = (req, res, next) => {
    Student.find({}).then((students) => { res.json(students); }).catch(err => { next(err.message); });
};
module.exports.GetStudentById = (req, res, next) => {
    Student.findById(req.params.id).then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: "Student not found" });
        }


    }).catch(err => { next(err.message); });
}
module.exports.CreateStudent = (req, res, next) => {
        Student.findOne({ email: req.body.Email }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Email already exists" });
            } else {
                req.body.password = md5(req.body.password);
                Student.create(req.body).then((data) => { res.status(200).json({ message: "Student created", data }); }).catch(err => {
                    next(err.message);
                });
            }
        });
    }
    //update student email
module.exports.UpdateStudentEmail = (req, res, next) => {
        Student.findOne({ Email: req.body.Email }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Email already exists" });
            } else {
                Student.findByIdAndUpdate(req.params.id, { Email: req.body.Email }).then((data) => {
                    if (data) {
                        res.status(200).json({ message: "Student updated" });
                    } else {
                        res.status(200).json({ message: "Student not updated" });
                    }
                }).catch(err => {
                    next(err.message);
                });
            }
        });
    }
    //update student password
module.exports.UpdateStudentPassword = (req, res, next) => {
    req.body.password = md5(req.body.password);
    Student.findByIdAndUpdate(req.params.id, { password: req.body.password }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Student updated" });
        } else {
            res.status(200).json({ message: "Student not updated" });
        }
    }).catch(err => {
        next(err.message);
    });
}

module.exports.DeleteStudent = (req, res, next) => {
    Student.findByIdAndRemove(req.params.id).then((data) => {
        if (data) {
            res.status(200).json({ message: "Student deleted" });
        } else {
            res.status(200).json({ message: "Student not found" });
        }
    }).catch(err => {
        next(err.message);
    });
}