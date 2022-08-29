const express = require('express');
const app = express();
const cors=require("cors")


// MIDDLEWARE
app.use(cors())
app.use(express.json());



//controllers
const authController=require("./controllers/auth.controller")
const userController=require("./controllers/user.controller")


// Endpoints
app.use("/api/auth",authController)
app.use("/api/user",userController)





module.exports =app;