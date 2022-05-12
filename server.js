const app = require("./app")
const dotenv = require('dotenv')
const connectDatabase = require("./configs/db")
const errorHandler = require("./utils/errorHandler")

// Handling UnCaught Exeception
process.on("uncaughtException", (err) => { 
    console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to UnCaught Exception `);
  process.exit(1)
})


//config file
dotenv.config({path:"configs/config.env"})

//connect dataBase
connectDatabase()


//middleware error Handler
app.use(errorHandler)

const server = app.listen(process.env.PORT,()=>{
    console.log(`Listing on port http://localhost:${process.env.PORT}`)
})


// Unhandle Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandle Promise Rejections`);
    server.close(() => {
      process.exit(1);
    });
  });