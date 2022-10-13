import { hash } from "bcryptjs";
import { prisma } from "..";
import AppError from "../errors/appError";
import { ICreateUser, IResponseUser } from "../interfaces";

export const createUser =async (data: ICreateUser): Promise<IResponseUser> => {
  const checkEmail = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if(checkEmail) {
    throw new AppError('Email já cadastrado, favor informar um email que não pertença a um usuário já cadastrado')
  }

  const checkUsername = await prisma.user.findUnique({
    where: {
      username: data.username
    }
  })

  if(checkUsername) {
    throw new AppError('Username já cadastrado, favor informar um username que não pertença a um usuário já cadastrado')
  }

  const hashedPass = await hash(data.password, 8)

  const newUser = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPass,
      avatar: data.avatar
    }
  })

  const {password: userPass, ...rest} = newUser

  return rest
}