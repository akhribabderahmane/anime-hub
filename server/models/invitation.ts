import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import invitationStatus from "../configs/invitationStatus";

const invitationSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },  
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }, 
    chatroom:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ChatRoom"
    },  
    status:{ 
        type:invitationStatus,
        default:invitationStatus.pending//pending
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});

const Invitation=mongoose.model("invitation",invitationSchema);

export  {invitationSchema,Invitation};