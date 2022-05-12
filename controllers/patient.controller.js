const Patient = require("../models/patients.model")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")

//creating patient
exports.createPatient = catchAsyncErrors(async(req,res,next)=>{
    req.body.psychiatrist = req.psychiatrist.id

    const patient = await Patient.create(req.body)
    res.status(201).json({
        success:true,
        patient
    })
})

//get all patient
exports.getAllPatient = catchAsyncErrors(async(req,res,next)=>{
    const patientCount = await Patient.countDocuments()
    const patients = await Patient.find()
    res.status(201).json({
        success:true,
        patients,
        patientCount
    })
}) 

//get update Patient
exports.updatePatient = catchAsyncErrors(async(req,res,next)=>{
    let patient = await Patient.findById(req.params.id)
    let psychiatrist = patient.psychiatrist
    let currentPsychiartist = req.psychiatrist.id

    
    if(!patient){
        return next(new ErrorHandler("Patient not found",404))
    }

    if(currentPsychiartist !== psychiatrist){
        return next(new ErrorHandler("not allow to change this"))
    }

    patient = await Patient.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    res.status(200).json({
        success:true,
        patient
    })
})


