const express = require("express");
const router = express.Router();
const {webHook} = require("../../controllers/webhook");
const {returnChallenge} = require("../../controllers/challenge");


router.get("/", returnChallenge);
router.post("/", webHook);

module.exports = router;