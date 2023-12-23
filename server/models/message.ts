import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"
    },
     text:{
        type : String,  // the data type of our model is a string
        required:true,
    },
    timespan:{
        type : Date,
        default:Date.now(),
    }
});

const Message=mongoose.model("message",messageSchema);
export {Message,messageSchema}

