import validator from "validator";
import mongoose,{Document} from "mongoose";
interface User extends Document {
    userName: string;
    email: string;
    password: string;
    profilePic?: string;
}

const userSchema=new mongoose.Schema<User>({
    userName:{
        required:[true,"username is required ."],
        type :String,
        unique:true,
        min: [4, 'Username must be at least 4 characters.'],
        max:[50, 'Username can be at most 50 characters.']
    },
    email:{
        type:String,
        required:[true,"email is required "],
        unique:true, 
        validate:{
            validator:(value: string) => validator.isEmail(value),
            message:"invalid email address"
        }
    },
    password:{
     required:[true,"Password is required ."],
     type:String,
     min:8,
     max:20
    },
    profilePic:{
        type:String,
        default:"",
        validate:{
            validator:(value: string) => /\.(jpg|jpeg|png)$/.test(value),
            message:"invalid image format ."
        }
    }
});

const user =mongoose.model("user",userSchema);
export default user;

