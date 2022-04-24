const express = require("express");
const router = express.Router();
const controller = require("../Controller/AuthenticateController");


router.post("/api/admin/login", (req, res, next) => { controller.Adminlogin(req, res, next) });
router.post("/api/student/login", (req, res, next) => { controller.Studentlogin(req, res, next) });
router.post("/api/speaker/login", (req, res, next) => { controller.Speakerlogin(req, res, next) });

router.post("/api/student/register", (req, res, next) => { controller.Studentregister(req, res, next) });
router.post("/api/speaker/register", (req, res, next) => { controller.Speakerregister(req, res, next) });


module.exports = router;