const Psychiartist = require("../models/psychiatrists.model")
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require("../utils/jwtToken")

exports.registerPsychiatrist= catchAsyncErrors(async(req,res)=>{
    const psychiartist = await Psychiartist.create(req.body)
    return sendToken(psychiartist,201,res)
})
