import mongoose from "mongoose";
import { commentSchema } from "./comment";
import { ratingSchema } from "./rating";

const animeSchema=new mongoose.Schema({
    title: { type: String, required: true },
    description: {type:String},
    imageUrl:{type:String},
    genre:[String],
    episodes:Number,
    myAnimeListScore:{
        type: Number,
    },
    comments:{
        type:[commentSchema],
        default:[]
    },
    rating:{
        type:[ratingSchema],
        default:[]
    },
    score:Number, // [animeList score + anime-hub score ]/2
});

const Anime=mongoose.model("anime",animeSchema);

export default Anime;