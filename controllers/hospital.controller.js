const Hospital = require("../models/hospital.model")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")


//creating patient
exports.createPatient = catchAsyncErrors(async(req,res,next)=>
    const patient = await Hospital.create(req.body)
    res.status(201).json({
        success:true,
        patient
    })
})