import Post from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const authorId = req.user.userId;

    const post = await Post.create({
      title,
      content,
      authorId,
      createdAt: new Date(),
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ error: "Error creating post" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const { author } = req.query;

    const query = author ? { authorId: author } : {};

    const posts = await Post.find(query)
      .populate("authorId", "email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
};
