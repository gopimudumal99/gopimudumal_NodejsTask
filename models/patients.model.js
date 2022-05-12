const mongoose = require("mongoose");
const validator = require("validator")


var validatePhone = function(phoneNo) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(phoneNo)
};


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
        validate:[validator.isStrongPassword(this.password,[{ minLength: 8, maxLength:15, minLowercase: 1, minUppercase: 1, minNumbers: 1}]),"password is not storng"]
    },
    address:{
        type:String,
        required:[true,"Please Enter Your Address"],
        minlength:[10,"Name should be atleast 10 charecters"],
    },
    phoneNo:{
        type:Number,
        required:[true,"Please enter phoneNo with country code"],
        validate:[validatePhone,'Please fill valid phone number'],
        match:[/^\+[1-9]{1}[0-9]{3,14}$/,`Please fill valid phoneNo: example: +(countryCode)(mobileno)`]
    },
    photo:{
        type:String,
        required:[true,"Please Provide your photo"]
    }
})

function checkPassword(str){
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return re.test(str);
}

module.exports = mongoose.model("Patient",patientSchema)
