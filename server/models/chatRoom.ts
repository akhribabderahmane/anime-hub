import mongoose from "mongoose";


const chatRoomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"chatroom name is reqiured ."]
    },
    creator:{
        // not yet
    }
})