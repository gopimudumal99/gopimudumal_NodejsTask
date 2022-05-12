const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");

const psychiartistSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please Enter Your First Name"],
        maxlength:[20,"Name cannot exceede 20 characters"],
    },
    lastName:{
        type:String,
        required:[true,"Please Enter Your Last Name"],
        maxlength:[20,"Name cannot exceede 20 charecters"],
    },
    hospitalName:{
        type:String,
        required:[true,"Please Enter Hospital Name"]
    },
    phoneNo:{
        type:Number
    },
    pinCode:{
        type:Number
    },
    state:{
        type:String
    }
},{
    versionKey:false,
    timestamps:true
})


//JWT TOKEN
psychiartistSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN,
    });
  };

module.exports= mongoose.model("Psychiatrist",psychiartistSchema)