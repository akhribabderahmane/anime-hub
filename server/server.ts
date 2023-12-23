import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express()
const port = 4000
dotenv.config();

// connect the database
const mongoUri=process.env.MONGO_URL || "";


const connect=async ()=>{
    try {
      await mongoose.connect(mongoUri);
      const db=mongoose.connection;
      console.log(` connection to ${db.name} has been done successfully `);  
    } catch (error) {
        console.log(" connection to database failed ...");
        console.log(error) 
    } 
}
connect();


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


