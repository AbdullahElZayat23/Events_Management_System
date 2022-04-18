const Student = require("../Models/Student");

module.exports.GetAllStudents = (req, res, next) => {
    Student.find({}).then((students) => { res.json(students); }).catch(err => { next(err); });
};
module.exports.GetStudentById = (req, res, next) => {
    Student.findById(req.params.id).then((student) => { res.status(200).json(student); }).catch(err => { next(err); });
}
module.exports.CreateStudent = (req, res, next) => {
    Student.create(req.body).then((data) => {
        res.status(200).json({ message: "student created", data })
    }).catch(err => {
        next(err);
    });
}
module.exports.UpdateStudent = (req, res, next) => {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then((data) => {
        res.status(200).json({ message: "student updated", data });
    }).catch(err => {
        next(err);
    });
}
module.exports.DeleteStudent = (req, res, next) => {
    Student.findByIdAndRemove(req.params.id).then((data) => { res.status(200).json({ message: "student deleted", data }); }).catch(err => {
        next(err);
    });
}