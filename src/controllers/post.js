import { PostModel } from "../models/post.js";
import { validatePost, validatePartialPost } from "../schemas/post.js";

export class PostController {
  static async getAllPosts(req, res) {
    try {
      const posts = await PostModel.getAllPosts();
      if (!posts) return res.status(404).json({ message: "Posts not found" });
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  static async getPost(req, res) {
    try {
      const post = await PostModel.getPost(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  static async createPost(req, res) {
    const validationResult = validatePost(req.body);
    if (!validationResult.success)
      return res.status(400).json(validationResult.error);
    try {
      const newPost = await PostModel.createPost(validationResult.data);
      if (!newPost)
        return res.status(400).json({ message: "Error while creating post" });
      res.status(201).json(newPost);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  static async updatePost(req, res) {
    const { id } = req.params;
    const validationResult = validatePartialPost(req.body);
    if (!validationResult.success)
      return res.status(400).json(validationResult.error);
    try {
      const updatedPost = await PostModel.updatePost({
        id,
        ...validationResult.data,
      });
      if (!updatedPost)
        return res.status(400).json({ message: "Error while updating post" });
      res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  static async deletePost(req, res) {
    try {
      const deletedPost = await PostModel.deletePost(req.params.id);
      if (!deletedPost)
        return res.status(400).json({ message: "Error while deleting post" });
      res.status(200).json(deletedPost);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
