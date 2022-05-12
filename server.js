const app = require("./app")
const dotenv = require('dotenv')
const connectDatabase = require("./configs/db")


//config file
dotenv.config({path:"configs/config.env"})

//connect dataBase
connectDatabase()


const server = app.listen(process.env.PORT,()=>{
    console.log(`Listing on port http://localhost:${process.env.PORT}`)
})
