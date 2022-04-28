const express = require('express');
const router = express.Router();
const student = require('../Controller/StudentController');
let path = '/api/students/';
router.route('/api/students')
    .get((req, res, next) => {
        if (req.role == 'Admin') {
            student.GetAllStudents(req, res, next);
        } else {
            res.redirect('/NotAuthorized');
        }
    })
    .post((req, res, next) => {
        if (req.role == 'Student') {
            student.CreateStudent(req, res, next);
        } else {
            res.redirect('/NotAuthorized');
        }

    });
router.delete(path + ':id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Student') {
        student.DeleteStudent(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }

});
router.put(path + 'password' + '/:id', (req, res, next) => {
    if (req.role == 'Student') {
        student.UpdateStudentPassword(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'email' + '/:id', (req, res, next) => {
    if (req.role == 'Student') {
        student.UpdateStudentEmail(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.get(path + ':id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Student') {
        student.GetStudentById(req, res, next)
    } else {
        res.redirect('/NotAuthorized');
    }
});

router.get(path + 'events' + '/:id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Student') {
        student.GetStudentEvents(req, res, next)
    } else {
        res.redirect('/NotAuthorized');
    }
});


module.exports = router;