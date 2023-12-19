import mongoose from "mongoose";

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
        // not yet 
    },
    rating:{
        // not yet
    },
    score:Number, // [animeList score + anime-hub score ]/2

  
})