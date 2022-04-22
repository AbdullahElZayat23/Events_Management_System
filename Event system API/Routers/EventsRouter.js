const express = require('express');
const router = express.Router();
const events = require('../Controller/EventController');
let path = '/api/events/';
let NotAuthorized = { message: "Not Authorized" };
router.route('/api/events')
    .get((req, res, next) => {
        if (req.role == 'Admin') {
            events.GetAllEvents(req, res, next);
        } else {
            res.redirect('/NotAuthorized');
        }
    })
    .post((req, res, next) => {
        if (req.role == 'Admin') {
            events.CreateEvent(req, res, next);
        } else {
            res.redirect('/NotAuthorized');
        }
    });

router.delete(path + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEvent(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.UpdateEvent(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'mainSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.AddEventMainSpeaker(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'subSpeaker/' + ':id', (req, res, next) => {

    if (req.role == 'Admin') {
        events.AddEventSubSpeaker(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }

});
router.put(path + 'students/' + ':id', (req, res, next) => {

    if (req.role == 'Admin') {
        events.AddEventStudents(req, res, next)
    } else {
        res.redirect('/NotAuthorized');
    }

});
router.put(path + 'decline/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeclineEvent(req, res, next)
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.delete(path + 'mainSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEventMainSpeaker(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }

});
router.delete(path + 'subSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEventSubSpeaker(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.delete(path + 'students/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEventStudent(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.get(path + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.GetEventById(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});

module.exports = router;