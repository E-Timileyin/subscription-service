import express from "express";
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000

// initialize db connection
connectDB();

app.listen(port, (err) => {
    if(!err){
        console.log(`server listening at http://localhost:${port}`)
    }else{
        console.log(`Error:, ${ err}`)
    }
})