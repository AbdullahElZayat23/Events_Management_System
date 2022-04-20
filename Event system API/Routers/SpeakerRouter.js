const express = require('express');
const router = express.Router();
const Speaker = require('../Controller/SpeakerController');
let path = '/api/speakers/';
router.route('/api/speakers')
    .get((req, res, next) => {
        Speaker.GetAllSpeakers(req, res, next);
    })
    .post((req, res, next) => {
        Speaker.CreateSpeaker(req, res, next);
    });
router.delete(path + ':id', (req, res, next) => { Speaker.DeleteSpeaker(req, res, next); });
router.put(path + 'email' + '/:id', (req, res, next) => { Speaker.UpdateSpeakerEmail(req, res, next); });
router.put(path + 'password' + '/:id', (req, res, next) => { Speaker.UpdateSpeakerPassword(req, res, next); });
router.put(path + 'username' + '/:id', (req, res, next) => { Speaker.UpdateSpeakerUsername(req, res, next); });
router.put(path + 'address' + '/:id', (req, res, next) => { Speaker.UpdateSpeakerAddress(req, res, next); });
router.get(path + ':id', (req, res, next) => { Speaker.GetSpeakerById(req, res, next) });

module.exports = router;