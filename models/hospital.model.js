const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
    hospitalName:{
        type:String,
        required:[true,"please provide name"],
    }
})

module.exports = mongoose.model("Hospital",hospitalSchema)