const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error")

app.use(express.json())
app.use(cookieParser())

//Routes Import
const psychiatrist = require("./routes/psychiatristRoute")
const patient = require("./routes/patientRoute")

app.use("/api/v1",psychiatrist)
app.use("/api/v1",patient)


//mddileware for Errors
app.use(errorMiddleware)


module.exports = app;