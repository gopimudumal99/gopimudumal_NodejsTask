const mongoose = require("mongoose");
const validator = require("validator")


const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        minlength:[3,"Name should be atleast 3 charecters"],
    },
    email:{
        type:String,
        required:[true,"Please Enter Your email"],
        validate:[validator.isEmail,"Please entet valid email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter your password"],
        validate:[checkPassword,"password is not storng"]
    },
    address:{
        type:String,
        required:[true,"Please Enter Your Address"],
        minlength:[10,"Name should be atleast 10 charecters"],
    },
    phoneNo:{
        type:String,
        required:[true,"Please enter phoneNo with country code"],
        match:[/^[1-9]{1}[0-9]{11,11}$/,"Please fill valid phoneNo: example: +(countryCode)(mobileno)"],
    },
    photo:{
        type:String,
        required:[true,"Please Provide your photo"]
    },
    psychiatrist:{
        type:mongoose.Schema.ObjectId,
        ref:"Psychiatrist",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

function checkPassword(str){
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return re.test(str);
}

module.exports = mongoose.model("Patient",patientSchema)
