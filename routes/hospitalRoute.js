const express = require("express")
const router = express.Router()

const {createHospital,getHospitals} = require('../controllers/hospital.controller')

router.route("/hospitals/new").post(createHospital)
router.route("/hospitals").get(getHospitals)

module.exports = router
