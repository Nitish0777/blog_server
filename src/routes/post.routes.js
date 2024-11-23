import express from "express";
import { createPost, getAllPosts } from "../controllers/post.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/post", authMiddleware, createPost);

router.get("/posts", authMiddleware, getAllPosts);

export default router;
