const app = require("express");
const router = app.Router();

const whatsapp = require("./whatsapp.route");

router.use("/whatsapp", whatsapp);

module.exports = router;
