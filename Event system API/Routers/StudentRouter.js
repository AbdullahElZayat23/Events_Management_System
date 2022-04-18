const express = require('express');
const router = express.Router();
const student = require('../Controller/StudentController');
let path = '/api/students/:id';
router.route('/api/students')
    .get((req, res, next) => {
        student.GetAllStudents(req, res, next);
    })
    .post((req, res, next) => {
        student.CreateStudent(req, res, next);
    });
router.delete(path, (req, res, next) => { student.DeleteStudent(req, res, next); });
router.put(path, (req, res, next) => { student.UpdateStudent(req, res, next); });
router.get(path, student.GetStudentById)

module.exports = router;