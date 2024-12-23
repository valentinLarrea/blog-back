import { randomUUID } from 'node:crypto'
import Post from '../models/database/post.js'

export class PostModel {
  static async getAllPosts() {
    try {
      const posts = await Post.find();
      if (posts.length === 0) return false;
      return posts;
    } catch (e) {
      throw new Error(`Error while getting all posts: ${e.message}`);
    }
  }
  
  static async getPost(id) {
    try {
      const post = await Post.findById(id);
      if (!post) return false;
      return post;
    } catch (e) {
      throw new Error(`Error while getting post: ${e.message}`);
    }
  }

  static async createPost({ title, description, author }) {
    try {
      const newPost = {
        id: randomUUID(),
        title,
        description,
        author,
      };
      if (!newPost) return false;

      await Post.create(newPost);
      return newPost;
    } catch (e) {
      throw new Error(`Error while creating post: ${e.message}`);
    }
  }

  static async updatePost({ id, title, description, author }) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, description, author },
        { new: true, runValidators: true }
      );
      if (!updatedPost) return false;
      return updatedPost;
    } catch (e) {
      throw new Error(`Error while updating post: ${e.message}`);
    }
  }

  static async deletePost(id) {
    try {
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) return false;
      return deletedPost;
    } catch (e) {
      throw new Error(`Error while deleting post: ${e.message}`);
    }
  }
}
