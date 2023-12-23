import mongoose from "mongoose";
import Role from "../configs/role";

const memberSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    joinedAt:{
        type:Date,
        default:Date.now()
    },
    role:{
        type:Role,
        default:Role.Member,
    }
});

const Member=mongoose.model("member",memberSchema);
export {memberSchema,Member};