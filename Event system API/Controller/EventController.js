const Event = require("../Models/Event");
var md5 = require('md5');
module.exports.GetAllEvents = (req, res, next) => {
    Event.find({}).then((Events) => { res.json(Events); }).catch(err => { next(err); });
};
module.exports.GetEventById = (req, res, next) => {
    Event.findById(req.params.id).then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => { next(err); });
}
module.exports.CreateEvent = (req, res, next) => {

        Event.create(req.body).then((data) => {
            if (data) {
                res.status(200).json({ message: "Event created" });
            } else {
                res.status(200).json({ message: "Event not created" });
            }
        }).catch(err => { next(err); });

    }
    //update event
module.exports.UpdateEvent = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err);
    });
}

//add event main speaker
module.exports.AddEventMainSpeaker = (req, res, next) => {
        Event.findByIdAndUpdate(req.params.id, { $set: { MainSpeakerID: req.body.MainSpeakerID } }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Event updated" });
            } else {
                res.status(200).json({ message: "Event not found" });
            }
        }).catch(err => {
            next(err);
        });
    }
    //add event sub speaker
module.exports.AddEventSubSpeaker = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $push: { SubSpeakerSID: req.body.SubSpeakerSID } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err);
    });
}

//add event students
module.exports.AddEventStudents = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $push: { StudentSID: req.body.StudentSID } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err);
    });
}

//delete event main speaker
module.exports.DeleteEventMainSpeaker = (req, res, next) => {
        Event.findByIdAndUpdate(req.params.id, { $set: { MainSpeakerID: 0 } }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Event updated" });
            } else {
                res.status(200).json({ message: "Event not found" });
            }
        }).catch(err => {
            next(err);
        });
    }
    //delete event sub speaker
module.exports.DeleteEventSubSpeaker = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $pull: { SubSpeakerSID: req.body.SubSpeakerSID } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err);
    });
}

//delete event students
module.exports.DeleteEventStudent = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $pull: { StudentSID: req.body.StudentSID } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err);
    });
}

module.exports.DeleteEvent = (req, res, next) => {
        Event.findByIdAndRemove(req.params.id).then((data) => {
            if (data) {
                res.status(200).json({ message: "Event deleted" });
            } else {
                res.status(200).json({ message: "Event not found" });
            }
        }).catch(err => {
            next(err);
        });
    }
    //decline event
module.exports.DeclineEvent = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $set: { Status: "Declined" } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err);
    });
}