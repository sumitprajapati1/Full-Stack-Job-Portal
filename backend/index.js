import express from "express";
import cookieParser from "cookie-parser"; 
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app=express();
const PORT= process.env.PORT;

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOpitons = {
    origin: "*",
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}
app.use(cors(corsOpitons));




app.listen(PORT , ()=>{
    connectDB();
    console.log(`Server running at ${PORT}`)
});