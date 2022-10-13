import { Router } from "express";
import { sessionRouter } from "./session.routes";
import { userRouter } from "./user.routes";

export const routes = Router()

routes.use('/login', sessionRouter)
routes.use('/user', userRouter)
