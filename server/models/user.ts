import mongoose from "mongoose";
import validator from "validator";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required ."],
        unique:[true,'Username already exists'],
        minlength: [4, 'Username must be at least 4 characters.'],
        maxlength: [50, 'Username can be at most 50 characters.'],
    },
    email:{
        type:String,
        required:[true, "email address is required ."],
        unique:[true,'Email already in use'],
        validate:{
           validator:validator.isEmail,
           message :"inavalid email address"
        }
    },
    password:{
        type:String,
        required:[true,"password is required ."],
        minlength: [8, 'Password must be at least 8 characters long.'],
        select:false //this will hide the password field while fetching data from db
    },
    profilePic:{
        type:String,
        default:"",
        validate:{
            validator: (value: string) => /\.(jpg|jpeg|png)$/.test(value),
            message: "invalid image format"
        }
    },
    favorite_animes:{
        // not yet 
    },
    toWatchList:{
        // not yet
    },
    chatRooms:{
        // not yet 
    },
    pending_invitations:{
        // not yet 
    },
    pending_requests:{
        // not yet 
    }
})