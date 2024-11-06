import express from "express";
const router = express.Router();
import * as blogController from "../blog/controllers/blogControllers.js";


// with "-" like create-blog is not working for me. so I am using createBlog instead of create-blog.

// Create Route
router.post("/createBlog", blogController.createBlog);

// Read Route
router.get("/readBlog", blogController.readBlog);

// Update Route
router.put("/updateBlog", blogController.updateBlog);

// Delete Route
router.delete("/deleteBlog", blogController.deleteBlog);

export default router;