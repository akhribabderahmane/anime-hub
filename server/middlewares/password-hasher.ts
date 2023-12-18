import {Document} from "mongoose";
import bcrypt from "bcrypt";

interface User extends Document {
    userName: string;
    email: string;
    password: string;
    profilePic?: string;
}

const passwordHasherMiddleware=(user:User,next:()=>void)=>{
    const myUser=user;
    if(myUser.isModified("password")){
        bcrypt.genSalt(10)
        .then((salt) => bcrypt.hash(user.password, salt))
        .then((hash) => {
            user.password = hash;
            next();
        })
        .catch((err)=> console.log(err))
    }else{
        next();
    }
}

export default passwordHasherMiddleware;


