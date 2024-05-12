// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB();



/*
import express from "express";
import mongoose from "mongoose";
import {DB_NAME} from "constant";

const app = express();

;(async ()=> {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,
            app.on("error", (error)=> {
                console.log(error);
            })
        );
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
    app.listen(process.env.PORT, () => {
        console.log(`port is listening on ${process.env.PORT}`);
    })
})();

// connectDB();
*/
