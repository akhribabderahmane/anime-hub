import mongoose from "mongoose";
export const ratingSchema = new mongoose.Schema({
    userId: String,
    rating_value: { type: Number, min: 1, max: 10 },
});

const rating=mongoose.model("rating",ratingSchema);
module.exports={rating,ratingSchema};
