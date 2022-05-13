const express = require("express")
const router = express.Router()
const {registerPsychiatrist,loginPsychiatrist,getAllSychiatrist}  = require("../controllers/psychatrists.controller")

router.route("/psychiatrists").get(getAllSychiatrist)
router.route("/register").post(registerPsychiatrist)
router.route("/login").post(loginPsychiatrist)



module.exports = router;
