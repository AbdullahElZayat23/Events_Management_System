const express = require('express');
const router = express.Router();
const student = require('../Controller/StudentController');
let path = '/api/students/';
router.route('/api/students')
    .get((req, res, next) => {
        student.GetAllStudents(req, res, next);
    })
    .post((req, res, next) => {
        student.CreateStudent(req, res, next);
    });
router.delete(path + ':id', (req, res, next) => { student.DeleteStudent(req, res, next); });
router.put(path + 'password' + '/:id', (req, res, next) => { student.UpdateStudentPassword(req, res, next); });
router.put(path + 'email' + '/:id', (req, res, next) => { student.UpdateStudentEmail(req, res, next); });
router.get(path + ':id', (req, res, next) => { student.GetStudentById(req, res, next) });

module.exports = router;