const express = require('express');
const router = express.Router();
const events = require('../Controller/EventController');
const NotAuthorized = require('../Middleware/Authorization.js');
let path = '/api/events/';
router.route('/api/events')
    .get((req, res, next) => {
        if (req.role == 'Admin') {
            events.GetAllEvents(req, res, next);
        } else {
            NotAuthorized(req, res, next);
        }
    })
    .post((req, res, next) => {
        if (req.role == 'Admin') {
            events.CreateEvent(req, res, next);
        } else {
            NotAuthorized(req, res, next);
        }
    });

router.delete(path + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEvent(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});
router.put(path + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.UpdateEvent(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});
router.put(path + 'mainSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.AddEventMainSpeaker(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});
router.put(path + 'subSpeaker/' + ':id', (req, res, next) => {

    if (req.role == 'Admin') {
        events.AddEventSubSpeaker(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }

});
router.put(path + 'students/' + ':id', (req, res, next) => {

    if (req.role == 'Admin') {
        events.AddEventStudents(req, res, next)
    } else {
        NotAuthorized(req, res, next);
    }

});
router.put(path + 'decline/' + ':id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Speaker') {
        events.DeclineEvent(req, res, next)
    } else {
        NotAuthorized(req, res, next);
    }
});
router.delete(path + 'mainSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEventMainSpeaker(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }

});
router.delete(path + 'subSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEventSubSpeaker(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});
router.delete(path + 'students/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.DeleteEventStudent(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});
router.get(path + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.GetEventById(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});

router.get(path + 'MainSpeakerUserName/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.GetEventMainSpeakerName(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});

router.post(path + 'title/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.UpdateEventTitle(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});

router.post(path + 'date/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.UpdateEventDate(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});

router.post(path + 'UpdateMainSpeaker/' + ':id', (req, res, next) => {
    if (req.role == 'Admin') {
        events.UpdateEventMainSpeaker(req, res, next);
    } else {
        NotAuthorized(req, res, next);
    }
});



module.exports = router;