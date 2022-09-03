const mongoose = require('mongoose');


const CommentSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
        maxLength:100,
    },
    like:{
        type:Number,
        default:0
    }
},{
    timestamps:true,
    versionKey:false
})

const Comment=mongoose.model("Comment",CommentSchema)

module.exports=Comment