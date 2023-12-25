import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    text:{
        type:String,
        required:true,
    },
    timespan:{
        type:Date,
        default:Date.now()
    }
});
const Comment=mongoose.model("Comment",commentSchema);
export {commentSchema,Comment}