import { Router } from "express";
import { sessionRouter } from "./session.routes";

export const routes = Router()

routes.use('/login', sessionRouter)
