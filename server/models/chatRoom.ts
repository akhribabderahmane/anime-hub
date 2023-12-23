import mongoose from "mongoose";
import { memberSchema } from "./member";
import { invitationSchema } from "./invitation";
import { messageSchema } from "./message";


const chatRoomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"chatroom name is reqiured ."]
    },
    chatPicture:{
        type:String,
        default:"",
        validate:{
            validator: (value: string) => /\.(jpg|jpeg|png)$/.test(value),
            message: "invalid image format"
        }
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    members:{
        type:[memberSchema],
        default:[]
    },
    invitations:{
        type:[invitationSchema],
        default:[]
    },
    messages:{
        type:[messageSchema],
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
});

const ChatRoom=mongoose.model("chatroom",chatRoomSchema);

export default ChatRoom;
