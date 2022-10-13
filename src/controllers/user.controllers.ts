import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";
import { getProfile } from "../services/session.services";
import { createUser } from "../services/user.services";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  try {
    for (let key in data) {
      if (typeof data[key] !== 'string') {
        throw new AppError('Por favor verifique os campos informados, todos eles aceitam apenas dados do tipo string')
      }
    }
    const newUser = await createUser(data)

    return res.send(newUser)
  } catch (err) {
    next(err)
  }
}

export const readProfile = async (req: Request, res: Response, next: NextFunction) => {
 const {id} = req.user

 try {
  const user = await getProfile(id)

  return res.send(user)
 } catch (error) {
  next(error)
 }
}