import { Router } from "express";
import { readProfile, signup } from "../controllers/user.controllers";
import { ensureAuth } from "../middlewares/ensureAuth";

export const userRouter = Router()

userRouter.post('/create', signup)
userRouter.use(ensureAuth)
userRouter.get('/profile', readProfile)