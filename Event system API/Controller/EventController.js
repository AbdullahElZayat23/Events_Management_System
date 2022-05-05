const Event = require("../Models/Event");
const md5 = require('md5');
const Speaker = require('../Models/Speaker');
module.exports.GetAllEvents = (req, res, next) => {
    Event.find({}, { __v: 0 }).then((Events) => { res.json(Events); }).catch(err => { next(err.message); });
};
module.exports.GetEventById = (req, res, next) => {
    Event.findById(req.params.id, { __v: 0 }).then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => { next(err.message); });
}
module.exports.CreateEvent = (req, res, next) => {

        Event.create(req.body).then((data) => {
            if (data) {
                res.status(200).json({ message: "Event created" });
            } else {
                res.status(200).json({ message: "Event not created" });
            }
        }).catch(err => { next(err.message); });
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
        next(err.message);
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
            next(err.message);
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
        next(err.message);
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
        next(err.message);
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
            next(err.message);
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
        next(err.message);
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
        next(err.message);
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
            next(err.message);
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
        next(err.message);
    });
}

module.exports.GetEventMainSpeakerName = (req, res, next) => {
    Speaker.findOne({ _id: req.params.id }, { UserName: 1, _id: 0 }).then(data => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: "Mainspeaker not found" });
        }
    }).catch(
        error => {
            next(err.message);
        }
    );
}


module.exports.UpdateEventTitle = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $set: { Title: req.body.Title } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event Title updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err.message);
    });
}

module.exports.UpdateEventDate = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $set: { Eventdate: req.body.Eventdate } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event date updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err.message);
    });
}

module.exports.UpdateEventMainSpeaker = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, { $set: { MainSpeakerID: req.body.MainSpeakerID } }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Event mainspeaker updated" });
        } else {
            res.status(200).json({ message: "Event not found" });
        }
    }).catch(err => {
        next(err.message);
    });
}