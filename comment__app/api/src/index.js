const express=require("express")
const cors=require("cors")
const app=express()
const morgan = require("morgan")
app.use(express.json())
app.use(morgan("common"))
app.use(cors())

const commentControllers=require("./controllers/Comment.controller.js")
const subCommentControllers=require("./controllers/SubComment.controller.js")
app.use("/api/v1/comments",commentControllers)
app.use("/api/v1/subcomments",subCommentControllers)

module.exports=app