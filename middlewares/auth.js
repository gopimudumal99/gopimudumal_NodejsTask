const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("./catchAsyncErrors")
const jwt = require("jsonwebtoken")
const Psychiartist = require("../models/psychiatrists.model")


exports.isAuthenticatedPsychatrist = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login/register access to this result"))
    }
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
    req.psychiatrist= await Psychiartist.findById(decodedToken.id)
    next()
})


