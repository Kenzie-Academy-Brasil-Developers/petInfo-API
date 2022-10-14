import { Router } from "express";
import { createNewPost, deletePostById, getPosts, updatePostById } from "../controllers/post.controllers";
import { ensureAuth } from "../middlewares/ensureAuth";

export const postRouter = Router()

postRouter.use(ensureAuth)
postRouter.post('/create', createNewPost)
postRouter.get('/', getPosts)
postRouter.patch('/:post_id', updatePostById)
postRouter.delete('/:post_id', deletePostById)