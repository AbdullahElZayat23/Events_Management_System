const express = require('express');
const router = express.Router();
const events = require('../Controller/EventController');
let path = '/api/events/';
router.route('/api/events')
    .get((req, res, next) => {
        events.GetAllEvents(req, res, next);
    })
    .post((req, res, next) => {
        events.CreateEvent(req, res, next);
    });
router.delete(path + ':id', (req, res, next) => { events.DeleteEvent(req, res, next); });
router.put(path + ':id', (req, res, next) => { events.UpdateEvent(req, res, next); });

router.put(path + 'mainSpeaker/' + ':id', (req, res, next) => { events.AddEventMainSpeaker(req, res, next); });
router.put(path + 'subSpeaker/' + ':id', (req, res, next) => { events.AddEventSubSpeaker(req, res, next); });
router.put(path + 'students/' + ':id', (req, res, next) => { events.AddEventStudents(req, res, next) });
router.put(path + 'decline/' + ':id', (req, res, next) => { events.DeclineEvent(req, res, next) });
router.delete(path + 'mainSpeaker/' + ':id', (req, res, next) => { events.DeleteEventMainSpeaker(req, res, next); });
router.delete(path + 'subSpeaker/' + ':id', (req, res, next) => { events.DeleteEventSubSpeaker(req, res, next); });
router.delete(path + 'students/' + ':id', (req, res, next) => { events.DeleteEventStudent(req, res, next) });


router.get(path + ':id', (req, res, next) => { events.GetEventById(req, res, next) });

module.exports = router;