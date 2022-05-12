const express = require("express")
const router = express.Router()
const {createPatient,updatePatient,getAllPatient} = require("../controllers/patient.controller")

const {isAuthenticatedPsychatrist} = require("../middlewares/auth")

router.route("/patients").get(isAuthenticatedPsychatrist,getAllPatient)

router.route("/patient/new").post(isAuthenticatedPsychatrist,createPatient)

router.route("/patient/:id").put(isAuthenticatedPsychatrist,updatePatient)

module.exports = router

