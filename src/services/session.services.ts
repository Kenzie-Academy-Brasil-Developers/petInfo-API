import { compare } from "bcryptjs"
import { prisma } from ".."
import AppError from "../errors/appError"
import authConfig from '../configs/auth'
import { sign } from "jsonwebtoken"

export const authService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if(!user) {
    throw new AppError('Email ou senha inválidos', 401)
  }

  const passMatch = await compare(password, user.password)

  if(!passMatch) {
    throw new AppError('Email ou senha inválidos', 401)
  }

  const {secret, expiresIn} = authConfig.jwt

  const token = sign({}, secret, {
    subject: user.id,
    expiresIn
  })

  return {
    token
  }
}