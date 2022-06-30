const express = require("express");
const router = express.Router();
const {returnChallenge, webHook} = require("../../controllers/whatsapp.controller");


router.get("/", returnChallenge);
router.post("/", webHook);

module.exports = router;