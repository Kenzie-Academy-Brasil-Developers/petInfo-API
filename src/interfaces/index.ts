export interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export interface ICreateUser {
  username: string
  email: string
  password: string
  avatar: string
}

export interface IResponseUser {
  id: string
  username: string
  email: string
  avatar: string
}