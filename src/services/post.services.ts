import { prisma } from "..";
import AppError from "../errors/appError";
import { ICreatePost, IResponsePost, IUpdatePost } from "../interfaces";

export const createPost = async (data: ICreatePost, id: string): Promise<IResponsePost> => {
  const newPost = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      user_id: id
    },
    include: {
      userId: true
    }
  })

  const { password, ...rest } = newPost.userId

  const response = {
    id: newPost.id,
    title: newPost.title,
    content: newPost.content,
    createdAt: newPost.created_at,
    user: { ...rest }
  }

  return response
}

export const getAllPosts = async (): Promise<IResponsePost[]> => {
  const posts = await prisma.post.findMany({
    include: {
      userId: true
    }
  })

  const response: IResponsePost[] = []

  posts.forEach(post => {
    const { password, ...rest } = post.userId

    const temp = {
      id: post.id,
      title: post.title,
      content: post.content,
      createdAt: post.created_at,
      user: { ...rest }
    }

    response.push(temp)
  })

  return response
}

export const updatePost = async (data: IUpdatePost, id: string): Promise<IResponsePost> => {
  const checkPost = await prisma.post.findUnique({
    where: {
      id
    }
  })

  if (!checkPost) {
    throw new AppError('Post não encontrado, por favor verifique o id do post informado', 404)
  }

  const updatedPost = await prisma.post.update({
    where: {
      id
    },
    data: {
      title: data.title,
      content: data.content
    },
    include: {
      userId: true
    }
  })

  const { password, ...rest } = updatedPost.userId

  const response = {
    id: updatedPost.id,
    title: updatedPost.title,
    content: updatedPost.content,
    user: { ...rest }
  }

  return response

}

export const deletePost = async (id: string) => {
  const checkPost = await prisma.post.findUnique({
    where: {
      id
    }
  })

  if (!checkPost) {
    throw new AppError('Post não encontrado, por favor verifique o ID informado no parametro da requisição', 404)
  }

  const deleted = await prisma.post.delete({
    where: {
      id
    }
  })

  return deleted
}