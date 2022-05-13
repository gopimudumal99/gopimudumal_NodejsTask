const Patient = require("../models/patients.model")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Psychiatrists = require("../models/psychiatrists.model")

//creating patient
exports.createPatient = catchAsyncErrors(async(req,res,next)=>{
    req.body.psychiatrist = req.psychiatrist.id
    const patient = await Patient.create(req.body)
    res.status(201).json({
        success:true,
        patient
    })
})

//get  patient for one psychiatrist
exports.getSinglePsychiatristPatient = catchAsyncErrors(async(req,res,next)=>{
    const a = req.params.id
    const patients = await Patient.find({psychiatrist:a})
    const count = await Patient.count({psychiatrist:a})
    res.status(200).json({
        success:true,
        patients,
        count,
    })
}) 


//get count:patients and pychiartist and hospital
exports.getInformation = catchAsyncErrors(async(req,res,next)=>{
   res.json({
    "issue":"not getting this"
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


