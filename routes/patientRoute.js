const express = require("express")
const router = express.Router()
const {createPatient,updatePatient,getSinglePsychiatristPatient,getInformation} = require("../controllers/patient.controller")

const {isAuthenticatedPsychatrist} = require("../middlewares/auth")

router.route("/info").get(getInformation)

router.route("/psychiatrists/:id").get(getSinglePsychiatristPatient)

router.route("/patient/new").post(isAuthenticatedPsychatrist,createPatient)

router.route("/patient/:id").put(isAuthenticatedPsychatrist,updatePatient)

module.exports = router

