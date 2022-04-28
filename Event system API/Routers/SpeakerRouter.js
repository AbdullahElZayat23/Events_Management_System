const express = require('express');
const router = express.Router();
const Speaker = require('../Controller/SpeakerController');
let path = '/api/speakers/';
router.route('/api/speakers')
    .get((req, res, next) => {
        if (req.role == 'Admin') {
            Speaker.GetAllSpeakers(req, res, next);
        } else {
            res.redirect('/NotAuthorized');
        }

    })
    .post((req, res, next) => {
        if (req.role == 'Speaker') {
            Speaker.CreateSpeaker(req, res, next);
        } else {
            res.redirect('/NotAuthorized');
        }

    });
router.delete(path + ':id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Speaker') {
        Speaker.DeleteSpeaker(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'email' + '/:id', (req, res, next) => {
    if (req.role == 'Speaker' || req.role == 'Admin') {
        Speaker.UpdateSpeakerEmail(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'password' + '/:id', (req, res, next) => {
    if (req.role == 'Speaker') {
        Speaker.UpdateSpeakerPassword(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'username' + '/:id', (req, res, next) => {
    if (req.role == 'Speaker') {
        Speaker.UpdateSpeakerUsername(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }
});
router.put(path + 'address' + '/:id', (req, res, next) => {
    if (req.role == 'Speaker' || req.role == 'Admin') {
        Speaker.UpdateSpeakerAddress(req, res, next);
    } else {
        res.redirect('/NotAuthorized');
    }

});
router.get(path + ':id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Speaker') {
        Speaker.GetSpeakerById(req, res, next)
    } else {
        res.redirect('/NotAuthorized');
    }
});

router.get(path + 'events' + '/:id', (req, res, next) => {
    if (req.role == 'Admin' || req.role == 'Speaker') {
        Speaker.GetSpeakerEvents(req, res, next)
    } else {
        res.redirect('/NotAuthorized');
    }
});
module.exports = router;