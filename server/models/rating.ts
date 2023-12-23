import mongoose from "mongoose";

const ratingSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    ratingValue:Number,
});

const Rating=mongoose.model("rating",ratingSchema);

export {ratingSchema,Rating}