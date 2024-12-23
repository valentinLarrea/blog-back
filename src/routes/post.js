import { Router } from 'express'
import { PostController } from '../controllers/post.js'

export const postsRouter = Router()

postsRouter.get('/', PostController.getAllPosts);
postsRouter.post('/', PostController.createPost);

postsRouter.get('/:id', PostController.getPost);
postsRouter.put('/:id', PostController.updatePost);
postsRouter.delete('/:id', PostController.deletePost);
