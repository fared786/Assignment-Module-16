import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import * as path from "path";

import router from "./routes/api.js"

import { MONGODB_CONNECTION, PORT, MAX_JSON_SIZE, URL_ENCODED, WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./blog/config/config.js";
import { execPath } from "process";

const blog = express();

// Global Application Middlewares
blog.use(cors());
blog.use(express.json({limit:MAX_JSON_SIZE}));
blog.use(express.urlencoded({extended:URL_ENCODED}));
blog.use(hpp());
blog.use(helmet());
blog.use(cookieParser());

// Rate Limiter
const limiter =rateLimit({windowMs:REQUEST_LIMIT_TIME, max:REQUEST_LIMIT_NUMBER});
blog.use(limiter);


// Web Caching
blog.set('etag', WEB_CACHE);


// MongoDB connection
/*
I need to connect MongoDB here.
*/


// Set API Routes 
blog.use("/api", router);

// Set Application storage
blog.use(express.static('storage'));


// Running Back-end Blog project
blog.listen(PORT, ()=>{
    console.log("Blog project is running...");
})

