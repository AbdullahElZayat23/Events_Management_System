const Speaker = require("../Models/Speaker");
var md5 = require('md5');
module.exports.GetAllSpeakers = (req, res, next) => {
    Speaker.find({}).then((Speakers) => { res.json(Speakers); }).catch(err => { next(err); });
};
module.exports.GetSpeakerById = (req, res, next) => {
    Speaker.findById(req.params.id).then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: "Speaker not found" });
        }
    }).catch(err => { next(err); });
}
module.exports.CreateSpeaker = (req, res, next) => {

    Speaker.findOne({ email: req.body.Email }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Email already exists" });
        } else {
            req.body.password = md5(req.body.password);
            Speaker.create(req.body).then((data) => { res.status(200).json({ message: "Speaker created", data }); }).catch(err => {
                next(err);
            });
        }
    });
}

//update speaker password
module.exports.UpdateSpeakerPassword = (req, res, next) => {
        req.body.password = md5(req.body.password);
        Speaker.findByIdAndUpdate(req.params.id, { password: req.body.password }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Speaker updated" });
            } else {
                res.status(200).json({ message: "Speaker not updated" });
            }
        }).catch(err => {
            next(err);
        });
    }
    //update speaker email
module.exports.UpdateSpeakerEmail = (req, res, next) => {
        Speaker.findOne({ Email: req.body.Email }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Email already exists" });
            } else {
                Speaker.findByIdAndUpdate(req.params.id, { Email: req.body.Email }).then((data) => {
                    if (data) {
                        res.status(200).json({ message: "Speaker updated" });
                    } else {
                        res.status(200).json({ message: "Speaker not updated" });
                    }

                }).catch(err => {
                    next(err);
                });
            }
        });
    }
    //update speaker username
module.exports.UpdateSpeakerUsername = (req, res, next) => {
        Speaker.findByIdAndUpdate(req.params.id, { UserName: req.body.UserName }).then((data) => {
            if (data) {
                res.status(200).json({ message: "Speaker updated" });
            } else {
                res.status(200).json({ message: "Speaker not updated" });
            }
        }).catch(err => {
            next(err);
        });
    }
    //update speaker address
module.exports.UpdateSpeakerAddress = (req, res, next) => {
    Speaker.findByIdAndUpdate(req.params.id, { address: req.body.address }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Speaker updated" });
        } else {
            res.status(200).json({ message: "Speaker not updated" });
        }
    }).catch(err => {
        next(err);
    });
}
module.exports.DeleteSpeaker = (req, res, next) => {
    Speaker.findByIdAndRemove(req.params.id).then((data) => {
        if (data) {
            res.status(200).json({ message: "Speaker deleted" });
        } else {
            res.status(200).json({ message: "Speaker not found" });
        }
    }).catch(err => {
        next(err);
    });
}