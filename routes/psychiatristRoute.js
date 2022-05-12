const express = require("express")
const router = express.Router()
const {registerPsychiatrist}  = require("../controllers/psychatrists.controller")

router.route("/register").post(registerPsychiatrist)

module.exports = router;
