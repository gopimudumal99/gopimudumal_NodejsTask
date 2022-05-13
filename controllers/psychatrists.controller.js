const Psychiartist = require("../models/psychiatrists.model")
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require("../utils/jwtToken")

exports.registerPsychiatrist= catchAsyncErrors(async(req,res)=>{
    const psychiartist = await Psychiartist.create(req.body)
    return sendToken(psychiartist,201,res)
})

exports.loginPsychiatrist = catchAsyncErrors(async (req, res, next) => {
    const { firstName} = req.body;
  
    const psychiatrist = await Psychiartist.findOne({ firstName })
  
    if (!psychiatrist) {
      return next(new ErrorHandler("there is no psychiatrist register with this name", 401));
    }

    sendToken(psychiatrist, 200, res);
  });

exports.getAllSychiatrist = catchAsyncErrors(async(req,res)=>{
    const psychiartists = await Psychiartist.find();
    res.status(201).json({
        success:true,
        psychiartists,
    })
}) 
