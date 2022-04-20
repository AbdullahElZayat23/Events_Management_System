const express = require("express");
const router = express.Router();
const controller = require("../Controller/AuthenticateController");


router.post("/admin/login", (req, res, next) => { controller.Adminlogin(req, res, next) });
router.post("/student/login", (req, res, next) => { controller.Studentlogin(req, res, next) });
router.post("/speaker/login", (req, res, next) => { controller.Speakerlogin(req, res, next) });

module.exports = router;