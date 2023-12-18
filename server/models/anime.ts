import mongoose from "mongoose";
import {ratingSchema} from "./rating";

const animeSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:String,
    genres:[String],
    status: { type: String, enum: ["Airing", "Finished", "Not yet aired"] },
    rating:{type:[ratingSchema],default:[]},
    comments:{type:[String],default:[]}
})

