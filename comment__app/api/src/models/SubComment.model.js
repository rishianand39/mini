const mongoose = require('mongoose');


const SubCommentSchema=new mongoose.Schema({
    messageId:{
        type:String,
        required:true,
    },
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
})

const SubComment=mongoose.model("SubComment",SubCommentSchema)

module.exports=SubComment