const express = require("express")
const router = express.Router()
const {registerPsychiatrist,loginPsychiatrist}  = require("../controllers/psychatrists.controller")

router.route("/register").post(registerPsychiatrist)
router.route("/login").post(loginPsychiatrist)


module.exports = router;
